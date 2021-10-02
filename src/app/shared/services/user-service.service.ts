import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from '../models/users';
import userList from '../mockData/userList.json';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  mockDataEnabled = true;
  users: Array<object> = userList.data;
  

  constructor(private http : HttpClient) { }
 
  getUsers(){
    if (this.mockDataEnabled) {
      console.log(this.users)
      return of(this.users);
    }
    else{
    return this.http.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
  }
  }
}


