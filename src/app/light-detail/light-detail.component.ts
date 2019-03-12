import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Light } from '../lights';
import { LightService } from '../light.service';
@Component({
  selector: 'app-light-detail',
  templateUrl: './light-detail.component.html',
  styleUrls: ['./light-detail.component.scss']
})
export class LightDetailComponent implements OnInit {
  @Input() light: Light;
  // @Input() switch: Light;


  constructor(
    private route: ActivatedRoute,
    private lightService: LightService
  ) { }

  ngOnInit() {
    // this.getLight();
  }

  close(): void {
    this.light = null;

  }

  getLight(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lightService.getLight(id)
      .subscribe(light => this.light = light);
  }
}
