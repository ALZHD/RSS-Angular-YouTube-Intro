import { Component, OnDestroy } from '@angular/core';
import { DataTransferService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';
import { VideoItem } from 'src/app/header/search/search.component';

@Component({
  selector: 'app-sort-criterion-button',
  templateUrl: './sort-criterion-button.component.html',
  styleUrls: ['./sort-criterion-button.component.scss']
})
export class SortCriterionButtonComponent implements OnDestroy {
  searchData: VideoItem[] | undefined;
  dataSubscription: Subscription | undefined;

  constructor(private dataTransferService: DataTransferService) {
    this.dataSubscription = dataTransferService.searchData$.subscribe((data) => {
      console.log("data",data)
      this.searchData = data
    })
  }

  handleFilterByDateClick(): void {
    if (!this.searchData) return
      const sortedData = this.sortDataByDate(this.searchData);
      this.updateDataAndPerformActions(sortedData);
    console.log('Button clicked!');
  }

  sortDataByDate(data: VideoItem[]): VideoItem[] {
    return data.slice().sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return dateA.getTime() - dateB.getTime();
    });
  }

  updateDataAndPerformActions(sortedData: VideoItem[]): void {
    this.searchData = sortedData;
    this.dataTransferService.updateSearchData(sortedData)
;
    // Другие действия с отсортированными данными
    // ...
  }

  ngOnDestroy(): void {
    if (this.dataSubscription && !this.dataSubscription.closed) {
      this.dataSubscription.unsubscribe();
    }
  }
}
