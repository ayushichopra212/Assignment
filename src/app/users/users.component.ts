import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IUsers } from '../shared/models/users';
import {Router} from '@angular/router'
import { MatDialog, MatDialogRef, MatSort } from '@angular/material';
import { MatSnackBar } from '@angular/material'
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { UserServiceService } from '../shared/services/user-service.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  [x: string]: any;
  users: any;
  dataSource:any;
  displayedColumns: string[]= ['id', 'name', 'username', 'email', 'actionsColumn'];
  

  @ViewChild(MatSort, {static: false}) sort: MatSort
  dialogRef: MatDialogRef<DialogFormComponent>
  
  constructor(public http: HttpClient,
              private router: Router,
               private snackBar : MatSnackBar,
               public dialog: MatDialog,
               private service: UserServiceService
              ) { }

  ngOnInit() {
    this.service.getUsers().subscribe(response => {
        this.users = response ;
        console.log(response)
        this.dataSource = this.users
      })
  }

  deleteData(){
     if(confirm('are you sure??')){
       this.http.delete<IUsers>('https://jsonplaceholder.typicode.com/users/'+id)
      .subscribe(response =>{
      this.users = response ;
      console.log(response);
      
      this.snackBar.open(response.toString(), 'deleted successfully',{
        duration:5000,
        verticalPosition: 'top'
      })
      }
      )}
  }

  

  onSelect(user){
    this.router.navigate(['/users', user.id]);
  }

  toUpdate(user: { id: any; }) {
    this.router.navigate(['/update', user.id])
  }

  openDialog(){
    this.dialogRef = this.dialog.open(DialogFormComponent,{
      minWidth:'300px',
      minHeight:'400px',
    });
    this.dialogRef.afterClosed().subscribe(result =>{
      // console.log(`the dialog was closed`)
      // console.log( "101", result);
      this.dataSource.push(result);
      console.log("2222", this.dataSource)
      
    })
    
  }
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

