import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUsers } from '../shared/models/users';

 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user: any;
  userId;
  userForm: FormGroup;
  users: IUsers;
 
  constructor(private http: HttpClient, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.userId= id;
     this.onUpdate(id);

     this.userForm = this.formBuilder.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      email: [null, [Validators.required, Validators.email]]
    })
    
  }
 
  onUpdate(id){
    this.http.get<IUsers>("https://jsonplaceholder.typicode.com/users/"+id)
      .subscribe(response =>{
        this.user = response;
        console.log(this.user);
        this.userForm.setValue({
          name : this.user.name,
          username: this.user.username,
          email : this.user.email
        })
       })
  }
  
 saveForm(){
  if(this.userForm.valid){
  this.http.post<IUsers>('https://jsonplaceholder.typicode.com/users', this.userForm.value)
  .subscribe(response => {
    this.users = response;
    console.log(this.users)
  })}

}
}