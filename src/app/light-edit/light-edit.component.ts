import { Component, OnInit } from '@angular/core';
import { Light } from '../lights';
import { LightService } from '../light.service';


@Component({
  selector: 'app-light-edit',
  templateUrl: './light-edit.component.html',
  styleUrls: ['./light-edit.component.css']
})
export class LightEditComponent implements OnInit {
  lights: Light[];

  constructor(private lightService: LightService) { }

  ngOnInit() {
    this.getLights();
  }

  getLights(): void {
    this.lightService.getLights()
      .subscribe(lights => this.lights = lights);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.lightService.addLight({ name } as Light)
      .subscribe(light => {
        this.lights.push(light);
      });
  }

  delete(light: Light): void {
    this.lights = this.lights.filter(h => h !== light);
    this.lightService.deleteLight(light).subscribe();
  }
}
