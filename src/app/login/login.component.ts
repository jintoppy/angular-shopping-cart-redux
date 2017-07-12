import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  onLogin(username, password){
    console.log(username);
    console.log(password);
    this.service.signIn(username, password);
  }

}
