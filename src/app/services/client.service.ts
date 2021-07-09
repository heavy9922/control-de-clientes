import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientService {
  clients!: Observable<Client[]>;
  clientsCollection!: AngularFirestoreCollection<Client>;


  constructor(private readonly db:AngularFirestore) {
    this.clientsCollection = db.collection<Client>('clientes')
    this.getclients();
  }

  onSaveSvc(client:Client, cliId:string):Promise<void>{
    return new Promise(async (resolve,reject)=>{
      try{
        const id = cliId || this.db.createId();
        const data = {id, ...client};
        const result = this.clientsCollection.doc(id).set(data)
        resolve(result)
      }catch (error){
        reject(error.message)
      }
    })
  }

  private getclients(): void {
    this.clients = this.clientsCollection
      .snapshotChanges()
      .pipe(
        map((cambios) =>
          cambios.map((accion) => accion.payload.doc.data() as Client)
        )
      );
  }
}
