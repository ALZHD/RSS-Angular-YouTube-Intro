import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss']
})
export class VideoTitleComponent implements OnInit {
  @Input() title: any
  ngOnInit() {
    console.log('Полученный заголовок (title):', this.title);
}
} 
