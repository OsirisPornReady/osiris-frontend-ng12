import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { User } from "./interfaces/user";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./services/user/user.service";
import { observable, Observable, of, Subject } from "rxjs";
import { filter } from "rxjs/operators"; //在之后的版本中被整合到了rxjs中

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'osiris-fronted';
  user?:User;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService
  ) {
  }

  ngAfterViewInit() {
    let userid:number;
    this.activatedRoute.queryParams.subscribe((data) => {
      userid = data['userid'];
      this.user = this.userService.getUserInfo(userid);
    });
  }

  // stream:any = new Observable(observer => {
  //   setTimeout(() => {
  //     observer.next('okok');
  //   },2000)
  // })

  stream$:any = new Subject<any>();

  ngOnInit() {
    const observer = {
      next: (v:string) => console.log(v)
    }
    this.stream$.subscribe(observer);
    this.stream$.next('aa');
    console.log('just be happy');
    console.log('gitee hello!')
  }


}
