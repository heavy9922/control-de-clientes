import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfigComponent } from './components/config/config.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ClientsComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
    ConfigComponent,
    NoFoundComponent,
    FoodPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clients'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
