import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataTransferService {
  private searchDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);



  searchData$: Observable<any[]> = this.searchDataSubject.asObservable();
  updateSearchData(data: any[]): void {
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