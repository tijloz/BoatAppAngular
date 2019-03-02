import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  navLinks = [
    { path: 'light-edit', label: 'Add / Remove a light',  },
    { path: 'protection-edit', label: 'Add / Remove cathodic protection'}
  ];

}






