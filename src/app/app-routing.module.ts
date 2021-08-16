import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component: UsersComponent},
 // {path: 'form', component: FormComponent},
  // {path: 'users/form', component: FormComponent}, 
  {path: 'users' , component: UsersComponent},
  {path: 'users/:id', component: UsersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
