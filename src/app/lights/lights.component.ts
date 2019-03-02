import { Component, OnInit } from '@angular/core';
import { Light } from '../lights';
import { LightService } from '../light.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent implements OnInit {

  switchedLight: Light;
  selectedLight: Light;
  lights: Light[];

  constructor(private lightService: LightService) { }

  ngOnInit() {
    this.getLights();
  }

  onSelect(light: Light): void {
    this.selectedLight = light;
  }

  getLights(): void {
    this.lightService.getLights()
      .subscribe(lights => this.lights = lights);
  }

  onSwitch(light: Light): void {
     this.switchedLight = light;
  }


}
