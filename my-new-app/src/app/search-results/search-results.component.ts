import { Component, Input } from '@angular/core';
import { DataTransferService } from '../services/search.service';
import { VideoItem } from '../header/search/search.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  searchData$: Observable<VideoItem[]> =  this.dataTransferService.searchData$;
  constructor(private dataTransferService: DataTransferService) { }
}
