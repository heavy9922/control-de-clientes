import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TableComponent } from './component/table/table.component';
import { ClientsComponent } from './component/clients/clients.component';
import { EditComponent } from './component/edit/edit.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ConfigComponent } from './component/config/config.component';
import { NoFoundComponent } from './component/no-found/no-found.component';
import { FoodPageComponent } from './component/food-page/food-page.component';

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
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
