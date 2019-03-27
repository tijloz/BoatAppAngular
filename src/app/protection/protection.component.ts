import {Component, Input, OnInit} from '@angular/core';
import {Protection} from '../protections';
import {ProtectionService} from '../protection.service';
import {ElectronService} from 'ngx-electron';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent implements OnInit {
  @Input() switch: Protection;
  protections: Protection[];
  switchedProtection: Protection;
  // protection: Protection[];

  constructor(
    private protectionService: ProtectionService,
    private _electronService: ElectronService
  ) {
  }

  ngOnInit() {
    this.getProtections();
  }

  getProtections(): void {
    this.protectionService.getProtections().subscribe( arrayOfProtections => {
      this.protections = arrayOfProtections;
    }, err => {
      console.error('Failed to get protections');
      console.error(err);
    });
  }

  showOptions(protection: Protection): void {
    this.switchedProtection = protection;

  }

  onSwitch(protection: Protection): void {
    if (protection.state === 1) {
      console.log('Requesting protection off');
      protection.state = 0;
      this._electronService.ipcRenderer.send('deviceChannel', {protectionState: 0});

    } else {
      console.log('Requesting protection on');
      protection.state = 1;
      this._electronService.ipcRenderer.send('deviceChannel', {protectionState: 1});
    }
    this._electronService.ipcRenderer.send('deviceChannel', {});
  }
}
