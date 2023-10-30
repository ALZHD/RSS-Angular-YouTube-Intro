import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-publication-date',
  templateUrl: './publication-date.component.html',
  styleUrls: ['./publication-date.component.scss']
})
export class PublicationDateComponent {
  formattedDate: string = '';

  constructor(private datePipe: DatePipe) { }

 
  @Input() publishedAt: any;

  ngOnChanges() {
    if (this.publishedAt) {
      this.formattedDate = this.datePipe.transform(this.publishedAt, 'yyyy-MM-dd') || ''; // Use nullish coalescing operator to handle potential null from datePipe
      console.log(this.formattedDate); // Output: Formatted date like '2019-01-23'
    } else {
      this.formattedDate = ''; // Handle null cases by assigning an empty string
    }
  }
}
