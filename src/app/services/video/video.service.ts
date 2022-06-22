import { Injectable } from '@angular/core';
import { Video } from "../../interfaces/video";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videolist = [
    {
      title:"Good Morning",
      actor:["kanye west"],
      tag:["hip hop","rap"],
      path:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstaging.mymusic.net.tw%2Fmms%2Falbum%2FL%2F282%2F35282.jpg&refer=http%3A%2F%2Fstaging.mymusic.net.tw&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657851418&t=4f4a783379ae0f804f8c8de866932ef4"
    },
    {
      title:"Down Under",
      actor:["Luude"],
      tag:["D & B"],
      path:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.itc.cn%2Fq_70%2Fimages03%2F20220326%2Fb1badd5c40194fe39ed1463e42ffde38.jpeg&refer=http%3A%2F%2Fp5.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041148&t=62d90d06dbf57770d6b621b26c4794e9"
    },
    {
      title:"Prey(Original)",
      actor:["Mick Gordon"],
      tag:["Game Theme"],
      path:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fsubject%2Fm%2Fpublic%2Fs29446984.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658041332&t=14951710c604fb31a7e763789c609bef"
    }
  ];
  // videoSelected:number = -1;
  videoDetailStream$:any = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }

  getVideos(): Video[] {
    return this.videolist;
  }

  getVideo(index:number): Video {
    return this.videolist[index];
  }

  // selectVideo(index:number): void {
  //   this.videoSelected = index;
  // }
  //
  // unselectVideo(): void {
  //   this.videoSelected = -1;
  // }
  //
  // isVideoSelected(): boolean {
  //   if (this.videoSelected == -1) return false;
  //   else return true;
  // }
  //
  // getSelectedVideo(): any {
  //   if (this.videoSelected == -1) {
  //     return false;
  //   } else {
  //     return this.getVideo(this.videoSelected);
  //   }
  // }

  pushVideoDetail(index:number): void {
    if (index == -1) {
      this.videoDetailStream$.next(false);
    } else {
      this.videoDetailStream$.next(this.getVideo(index));
    }

  }


}
