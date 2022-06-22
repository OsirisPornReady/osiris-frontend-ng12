import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { MainpageComponent } from "./components/mainpage/mainpage.component";
import { VideodetailComponent } from "./components/videodetail/videodetail.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent },
  // { path: 'videodetail', component: VideodetailComponent, outlet:'detail' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
