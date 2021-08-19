import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { UpdateComponent } from './update/update.component';


import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component: UsersComponent},
 // {path: 'form', component: FormComponent},
  // {path: 'users/form', component: FormComponent}, 
  {path: 'users' , component: UsersComponent},
  {path: 'users/:id', component: UsersDetailComponent},
  {path: 'create', component: UpdateComponent},
 { path:'update', component: UpdateComponent},
 { path:'update/:id', component: UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
