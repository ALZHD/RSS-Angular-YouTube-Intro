import { Component, Input, OnInit } from '@angular/core';
import { VideoItem } from 'src/app/header/search/search.component';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
  @Input() data: VideoItem = {} as VideoItem;
  ngOnInit() {
    console.log('Полученный заголовок (data):', this.data);
}
}


