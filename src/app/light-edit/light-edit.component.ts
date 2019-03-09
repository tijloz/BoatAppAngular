import { Component, OnInit } from '@angular/core';
import { Light } from '../lights';
import { LightService } from '../light.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-light-edit',
  templateUrl: './light-edit.component.html',
  styleUrls: ['./light-edit.component.scss']
})
export class LightEditComponent implements OnInit {
  lights: Light[];

  constructor(private route: ActivatedRoute,
              private lightService: LightService,
              private location: Location
  ) { }

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

  // save(): void {
  //   this.lightService.updateLight(this.light)
  //     .subscribe(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }
}
