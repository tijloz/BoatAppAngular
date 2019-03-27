import {Component, Input, OnInit} from '@angular/core';
import {Protection} from '../protections';
import {ProtectionService} from '../protection.service';
import {ElectronService} from 'ngx-electron';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./styles.scss']
})
export class ProtectionComponent implements OnInit {
  @Input() switch: Protection;
  @Input() protections: Protection;
  switchedProtection: Protection;
  protection: Protection[];

  constructor(
    private protectionService: ProtectionService,
    private _electronService: ElectronService
  ) {
  }

  ngOnInit() {
    this.getProtections();
  }

  getProtections(): void {
    this.protectionService.getProtections()
      .subscribe(protection => this.protection = protection);
  }

  showOptions(protection: Protection): void {
    this.switchedProtection = protection;

  }

  onSwitch(protection: Protection): void {
    // light.state = !light.state;

    // light.state = !light.state;
    // this._electronService.ipcRenderer.send('lightChannel', { lightState: 1 });
    // console.log('Requesting light on');

    if (protection.state === 1) {
      console.log('Requesting protection off');
      protection.state = 0;
      this._electronService.ipcRenderer.send('lightChannel', {protectionState: 0});

    } else {
      console.log('Requesting protection on');
      protection.state = 1;
      this._electronService.ipcRenderer.send('lightChannel', {protectionState: 1});
    }
    this._electronService.ipcRenderer.send('lightChannel', {});
  }
}
