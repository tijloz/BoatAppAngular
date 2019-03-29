import {Component} from '@angular/core';
import {SerialService} from './serial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private serialService: SerialService) {
  }


  navLinks = [
    {path: 'home', redirectTo: '/home', label: 'Home', hasNotification: false},
    {path: 'lights', label: 'Lights', hasNotification: false},
    {path: 'protection', label: 'Protection', hasNotification: false},
    {path: 'settings', label: 'Settings', hasNotification: true, notificationCount: 6}
  ];

  ngOnInit() {
    this.serialService.disconnectListener();
    this.serialService.voltageListener();
  }

}
