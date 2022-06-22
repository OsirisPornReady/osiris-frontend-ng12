import { Component, OnInit } from '@angular/core';
import { Video } from '../../interfaces/video'
import { VideoService } from "../../services/video/video.service";
import { Observable, of } from "rxjs";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.less']
})
export class MainpageComponent implements OnInit {

  // public videos: Observable<Video[]> = of([]);
  public videos: Video[] = [];
  public picUrl = ""

  constructor(
    private videoService: VideoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    // this.videos = this.videoService.getVideos();
    this.videos = this.videoService.getVideos();
  }

  // getVideoDetail(index:number): void {
  //   // this.router.navigate(['/videodetail'], { queryParams:{ videoid:index } });
  //   // this.router.navigate([{outlets:{ detail:['videodetail'] }}], { queryParams:{ videoid:index } });
  //   this.videoService.selectVideo(index);
  // }

  pushVideoDetail(index:number): void {
    this.videoService.pushVideoDetail(index);
  }

}
