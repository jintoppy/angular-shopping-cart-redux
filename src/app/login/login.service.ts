import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  getUserToken(){
    return localStorage.getItem('token');
  }

  isUserAuthenticated(){
    const token = localStorage.getItem('token');
    return token? true: false;
  }

  logout(){
    localStorage.clear();
  }
  signIn(username, password){
    this.http
    .post('/api/users/signin', {
      email: username,
      password: password
    })
    .map(res => res.json())
    .subscribe((res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
    });
  }

}
