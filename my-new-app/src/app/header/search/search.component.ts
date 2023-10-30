import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import   { DataTransferService} from  'src/app/services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  jsonData: any;

  searchResults: any[] = [];


  constructor(private dataTransferService: DataTransferService, private http: HttpClient) { }


  onSearch(): void {
    this.http.get('assets/response/response.json').subscribe({
      next: (data: any) => {
        this.jsonData = data;
        this.handleSearchResults();

      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  handleSearchResults(): void {
    if (!this.jsonData || !this.jsonData.items || !this.searchTerm) {
      console.error('No data to search.');
      return;
    }

    const searchTerm = this.searchTerm.toLowerCase();

    this.searchResults = this.jsonData.items.filter((item: { snippet: any; }) => {
      const snippet = item.snippet;
      const titleMatch = snippet && snippet.title &&
        snippet.title.toLowerCase().includes(searchTerm);
      const tagsMatch = snippet && snippet.tags &&
        snippet.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm));
        console.log(tagsMatch)
      const channelTitleMatch = snippet && snippet.channelTitle &&
        snippet.channelTitle.toLowerCase().includes(searchTerm);

      return titleMatch || tagsMatch || channelTitleMatch;

    });
    const results = this.searchResults
    this.dataTransferService.updateSearchData(results);
    console.log('Search results:', results);
  }



}
