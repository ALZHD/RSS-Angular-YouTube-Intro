import { Component } from '@angular/core';
import { ComponentService } from '../services/search.service';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent {
  constructor(public componentService: ComponentService) { }

}
