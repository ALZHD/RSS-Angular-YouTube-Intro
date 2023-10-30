import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  handleButtonClick(): void {
    // Handle the button click logic here
    console.log('Button clicked');
  }
}
