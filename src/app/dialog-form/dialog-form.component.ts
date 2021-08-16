import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatTable } from '@angular/material';
import { IUsers } from '../shared/models/users';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  userForm: FormGroup;
users: IUsers;
dataSource : any;
data: any;



  constructor(private formBuilder : FormBuilder,
              private http: HttpClient,
              private dialogRef: MatDialogRef<DialogFormComponent>) { }
  

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      email: [null, [Validators.required, Validators.email]]
    })
  }
  
  saveForm(){
    if(this.userForm.valid){
    this.http.post<IUsers>('https://jsonplaceholder.typicode.com/users', this.userForm.value)
    .subscribe(response => {
      this.users = response;
      console.log(this.users)
    })
    this.dialogRef.close({data: this.userForm.value});
    
  }
}

}
