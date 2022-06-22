import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {ActivatedRoute, NavigationEnd} from "@angular/router";
import { Video } from "../../interfaces/video";
import { VideoService } from "../../services/video/video.service";
import { Observable, observable, of, Subscription} from "rxjs";


@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.less']
})
export class VideodetailComponent implements OnInit {

  video?:any;
  subscription?:any;

  constructor(
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const videoDetailObserver = {
      next: (v:any) => {
        this.video = v;
      }
    }
    this.subscription = this.videoService.videoDetailStream$.subscribe(videoDetailObserver)
  }

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // getVideo(): void {
  //   // this.activatedRoute.queryParams.subscribe((index) => {
  //   //   this.video = this.videoService.getVideo(index['videoid']);
  //   // })
  //
  //   if (this.videoService.isVideoSelected()) {
  //     this.video = this.videoService.getSelectedVideo();
  //   }
  //
  //   console.log('get video')
  //
  //
  // }

  clean(): void {
    // this.videoService.unselectVideo();
    this.video = null;
  }

}
