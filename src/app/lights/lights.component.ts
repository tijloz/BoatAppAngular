import {Component, Input, OnInit} from '@angular/core';
import {Light} from '../lights';
import {LightService} from '../light.service';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {
  @Input() switch: Light;
  @Input() light: Light;
  switchedLight: Light;
  lights: Light[];

  constructor(
    private lightService: LightService,
    private _electronService: ElectronService
  ) {
  }

  ngOnInit() {
    this.getLights();
  }

  getLights(): void {
    this.lightService.getLights()
      .subscribe(lights => this.lights = lights);
  }

  onSwitch(light: Light): void {
    //light.state = !light.state;

    // light.state = !light.state;
    // this._electronService.ipcRenderer.send('lightChannel', { lightState: 1 });
    // console.log('Requesting light on');

    if (light.state === true) {
      light.state = false;
      console.log('Requesting light off');
      this._electronService.ipcRenderer.send('lightChannel', { lightState: 0 });
    } else if (light.state === false) {
      light.state = true;
      console.log('Requesting light on');
      this._electronService.ipcRenderer.send('lightChannel', { lightState: 1 });
    }
  }
}
