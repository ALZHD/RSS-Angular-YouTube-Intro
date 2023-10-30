import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import   { DataTransferService} from  'src/app/services/search.service'

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Snippet {
  publishedAt: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface VideoListResponse {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoItem[];
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  jsonData: VideoListResponse | undefined;

  searchResults: VideoItem[] = [];


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
