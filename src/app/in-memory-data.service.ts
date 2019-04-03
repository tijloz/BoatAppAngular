import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Light} from './lights';
import {Protection} from './protections';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const lights = [
      {id: 0, name: 'Anchor', state: '0', brightness: '0', timer: '4', channel: '1'},
      {id: 1, name: 'Nav', state: '0', brightness: '1', timer: '3', channel: '2'},
      {id: 2, name: 'Deck', state: '0', brightness: '2', timer: '2', channel: '3'},
      {id: 3, name: 'Galley', state: '0', brightness: '0', timer: '3', channel: '0'},
      {id: 4, name: 'Bathroom', state: '0', brightness: '1', timer: '3', channel: '1'},
      {id: 5, name: 'Cabin1', state: '0', brightness: '10', timer: '5', channel: '3'},
      {id: 6, name: 'Cabin2', state: '0', brightness: '3', timer: '2', channel: '2'},
      {id: 7, name: 'Ride', state: '0', brightness: '0', timer: '0', channel: '0'}
    ];
    return {lights};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(lights: Light[]): number {
    return lights.length > 0 ? Math.max(...lights.map(light => light.id)) + 1 : 11;
  }
  genPId(protections: Protection[]): number {
    return protections.length > 0 ? Math.max(...protections.map(protection => protection.id)) + 1 : 11;
  }
}
