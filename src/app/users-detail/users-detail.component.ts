import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsers } from '../shared/models/users';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  public userId;
  users: IUsers;
  dataSource: any;
 
  data: IUsers;
  

  constructor(private route: ActivatedRoute,
               public http: HttpClient) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;
    this.getOne(id);
  }

  getOne(id){
    this.http.get<IUsers>('https://jsonplaceholder.typicode.com/users/' + id)
      .subscribe(response => {
        this.users = response;
        console.log(response);
      })
  }
}
