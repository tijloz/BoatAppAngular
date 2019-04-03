import {Component, Input, OnInit} from '@angular/core';
import {Protection} from '../protections';
import {ProtectionService} from '../protection.service';
import {ElectronService} from 'ngx-electron';
import {Light} from "../lights";

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

    this._electronService.ipcRenderer.on('lightChannel', (event, arg) => {
      console.log(arg); // prints "ping"
    });

  //   add(name: string): void {
  //     name = name.trim();
  //   if (!name) { return; }
  //   this.lightService.addLight({ name } as Light)
  //     .subscribe(light => {
  //       this.lights.push(light);
  //     });
  // }
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
    if (protection.state === '1') {
      console.log('Requesting protection off');
      protection.state = '0';
      this._electronService.ipcRenderer.send('deviceChannel', {protectionState: 0});

    } else {
      console.log('Requesting protection on');
      protection.state = '1';
      this._electronService.ipcRenderer.send('deviceChannel', {protectionState: 1});
    }
    this._electronService.ipcRenderer.send('deviceChannel', {});
  }
}
