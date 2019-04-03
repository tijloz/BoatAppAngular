import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Protection} from '../protections';
import {ProtectionService} from '../protection.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-protection-detail',
  templateUrl: './protection-detail.component.html',
  styleUrls: ['./protection-detail.component.scss']
})
export class ProtectionDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private protectionService: ProtectionService
  ) {
  }

  @Input() protection: Protection;
  currentVoltageViewMode = 'anode';
  protectionDetailVoltage = '0';
  protectionDetailCurrent = '0';
  protectionDetailTempature = '0';



  setCurrentVoltageViewMode(newViewMode: string) {
    this.currentVoltageViewMode = newViewMode;
    console.log('Set the viewmpde to:' + newViewMode);

  }

  getRandomBetween(lower: number, upper: number): string {
    const test = ((Math.random() * upper) + lower).toFixed(3);
    console.log(test);
    return test;
  }

  updateProtectionDetails() {
    console.log('Updating Protection Details');
    // Dont run if protection is undefined
    console.log(`this.currentVoltageViewMode: ${this.protectionDetailVoltage}`);
    switch (this.currentVoltageViewMode) {
      case 'anode':
        console.log(`updated volt: ${this.protectionDetailVoltage}`);
        this.protectionDetailVoltage = this.getRandomBetween(0.55, 0.6);
        this.protectionDetailCurrent = this.getRandomBetween(3.2, 3.4);

        break;
      case 'cathode':
        this.protectionDetailVoltage = this.getRandomBetween(0.6, 0.7);
        this.protectionDetailCurrent = this.getRandomBetween(0.8, 0.9);
        break;
      case 'off':
        this.protectionDetailVoltage = '0';
        this.protectionDetailCurrent = '0';
        break;
      default:
        this.protectionDetailVoltage = this.getRandomBetween(55.6, 88.7);
        this.protectionDetailCurrent = this.getRandomBetween(55.8, 88.9);
        console.log('Failed to identify voltage viewmode');
    }
  }


  ngOnInit() {

    // Update the protection details
    this.updateProtectionDetails();

    this.trigger().subscribe( () => {
      this.updateProtectionDetails();
    });



  }

  trigger(): Observable<boolean> {
    return new Observable(obserber => {
      setInterval(() => {
        obserber.next(true);
      }, 500);
    });
  }

  close(): void {
    this.protection = null;
  }

  getProtection(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.protectionService.getProtection(id)
      .subscribe(protection => this.protection = protection);
  }
}
