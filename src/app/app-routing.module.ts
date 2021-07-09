import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './components/config/config.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'client/edit/:id', component: EditComponent},
  {path: '**', component: NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
