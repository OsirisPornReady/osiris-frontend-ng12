import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from '../../interfaces/user';
import { UserService } from "../../services/user/user.service";
import { observable, Observable, of} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public username:string = "";
  public pwd:string = "";
  public user?:User;
  public userid:number = -1;


  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  keyEnter(event:any): void {
    try {
      if (event.keyCode == 13) {
        this.login();
      }
    } catch (error) {
      console.log("key event wrong!");
    }
  }

  login(): void {
    if (this.username && this.pwd) {
      this.userid = this.userService.validateUser(this.username,this.pwd);
      if(this.userid >= 0) {
        this.router.navigate(['/mainpage'],{ queryParams:{ userid:this.userid } });
      } else {
        alert("user doesn't exist!");
      }
    } else {
      alert("please fullfill your account!");
    }
  }


}
