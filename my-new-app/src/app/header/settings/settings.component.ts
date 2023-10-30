import { Component } from '@angular/core';
import { ComponentService, DataTransferService } from 'src/app/services/search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  searchData: object[] = [];
  constructor(
    private dataTransferService: DataTransferService,
    private componentService: ComponentService
  ) { }

  handleButtonClick(): void {
    const data = this.dataTransferService.searchData$.subscribe(data => {
      console.log("recieved1", data)
      this.searchData = data;
      if (this.searchData.length > 0) {
        this.componentService.toggleComponentVisibility()
      }
    });
    // Другая логика обработки нажатия кнопки
  }
}