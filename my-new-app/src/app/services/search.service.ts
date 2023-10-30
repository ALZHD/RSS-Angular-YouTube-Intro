import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataTransferService {
  private searchDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  searchData$: Observable<any[]> = this.searchDataSubject.asObservable();

  updateSearchData(data: any[]): void {
    this.searchDataSubject.next(data);
  }
}
