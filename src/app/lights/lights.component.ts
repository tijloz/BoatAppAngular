import {Component, Input, OnInit} from '@angular/core';
import {Light} from '../lights';
import {LightService} from '../light.service';

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


    if (light.state) {
      light.state = false;

      console.log('Shit happened...');
      console.log("Requesting light off");
    } else if (!light.state) {
      light.state = true;
      console.log("Shit happened...");
      console.log("Requesting light on");
    }
  }
}
