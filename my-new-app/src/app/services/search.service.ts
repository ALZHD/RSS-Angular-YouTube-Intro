import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

import { VideoItem, VideoListResponse} from '../header/search/search.component'

@Injectable()
export class DataTransferService {
  private searchDataSubject: BehaviorSubject<VideoItem[]> = new BehaviorSubject<VideoItem[]>([]);

  searchData$: Observable<VideoItem[]> = this.searchDataSubject.asObservable().pipe(shareReplay());

  updateSearchData(data: VideoItem[]): void {
    console.log("update", data);
    this.searchDataSubject.next(data);
    // this.searchDataSubject.complete()
  }

  completeUpdate(): void {
    this.searchDataSubject.complete(); // Закрыть Subject после всех обновлений
  }
}
export class ComponentService {
  shouldShowComponent: boolean = false;

  constructor() { }

  toggleComponentVisibility() {
    this.shouldShowComponent = !this.shouldShowComponent;
  }
}