import {Injectable} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  constructor(private _electronService: ElectronService, private snackBar: MatSnackBar) {
  }


  disconnectListener() {
    // Register a listener
    this._electronService.ipcRenderer.on('serialHeatBeat', (event, message) => {
        switch (message.eventType) {
          case 'disconnect':
            console.error('Serial port was disconnected');

            this.snackBar.open('Device Disconnected!', 'Device Connection', {
              duration: 5000,
            });
            break;
          case 'reconnect':
            this.snackBar.open('Device Reconnected!', 'Device Connection', {
              duration: 5000,
            });
            break;
          default:
            console.log('Could not decode serialHeatBeat message');

        }
      }
    );
  }

}
