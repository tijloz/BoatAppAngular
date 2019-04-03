import {Component, Input, OnInit} from '@angular/core';
import {Light} from '../lights';
import {LightService} from '../light.service';
import {ElectronService} from 'ngx-electron';


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

  showOptions(light: Light): void {
    this.switchedLight = light;

  }

  onSwitch(light: Light): void {
    // light.state = !light.state;

    // light.state = !light.state;
    // this._electronService.ipcRenderer.send('lightChannel', { lightState: 1 });
    // console.log('Requesting light on');

    if (light.state === '1') {
      console.log('Requesting light off');
      light.state = '0';
      this._electronService.ipcRenderer.send('lightChannel', {
        lightDevice: '1',
        lightTimer: `${light.timer}`,
        lightChan: `${light.channel}`,
        lightState: `${light.state}`,
        lightBrightness: `${light.brightness}`
      });

    } else {

      console.log('Requesting light on');
      light.state = '1';
      this._electronService.ipcRenderer.send('lightChannel', {
        lightDevice: '1',
        lightTimer: `${light.timer}`,
        lightChan: `${light.channel}`,
        lightState: `${light.state}`,
        lightBrightness: `${light.brightness}`
      });
    }
  }
}
