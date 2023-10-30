import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { VideoItem, VideoListResponse} from '../header/search/search.component'

@Injectable()
export class DataTransferService {
  private searchDataSubject: BehaviorSubject<VideoItem[]> = new BehaviorSubject<VideoItem[]>([]);



  searchData$: Observable<VideoItem[]> = this.searchDataSubject.asObservable();
  updateSearchData(data: VideoItem[]): void {
    console.log("udpate",data)
    this.searchDataSubject.next(data);
  }


}

export class ComponentService {
  shouldShowComponent: boolean = false;

  constructor() { }

  toggleComponentVisibility() {
    this.shouldShowComponent = !this.shouldShowComponent;
  }
}