import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  receivedSearchResults: any[] = [];
  receiveSearchResults(results: any[]): void {
    this.receivedSearchResults = results;
    // Handle the received search results here
    console.log('Received search results in app-header:', results);
    // Perform necessary actions with the received search results
  }
}
