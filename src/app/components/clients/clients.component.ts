import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientXD = this.clientService.clients;

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {}

}
