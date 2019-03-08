import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { path: 'home', redirectTo: '/home', label: 'Home' },
    { path: 'lights', label: 'Lights' },
    { path: 'protection', label: 'Protection'},
    { path: 'settings', label: 'Settings'}
  ];
}
