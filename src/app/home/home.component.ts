import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
  }
  LightOn() {
    this._electronService.ipcRenderer.send('lightChannel', { lightState: 1 });
    console.log('Requesting light on');
  }
  LightOff() {
    this._electronService.ipcRenderer.send('lightChannel', { lightState: 0 });
    console.log('Requesting light on');
  }
}


