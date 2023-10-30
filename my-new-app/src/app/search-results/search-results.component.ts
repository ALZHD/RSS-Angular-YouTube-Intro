import { Component, Input } from '@angular/core';
import { DataTransferService } from '../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  searchData: any[] = [];
  constructor(private dataTransferService: DataTransferService) { }
  ngOnInit(): void {
    this.dataTransferService.searchData$.subscribe(data => {
      console.log("recieved", data)
      this.searchData = data;
    })
  };

}
