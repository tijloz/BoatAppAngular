import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Light} from './lights';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lights = [
      {id: 0, name: 'Anchor', state: false, brightness: 0},
      {id: 1, name: 'Nav', state: false, brightness: 0},
      {id: 2, name: 'Deck', state: false, brightness: 0},
      {id: 3, name: 'Galley', state: false, brightness: 0},
      {id: 4, name: 'Bathroom', state: false, brightness: 0},
      {id: 5, name: 'Cabin1', state: true, brightness: 0},
      {id: 6, name: 'Cabin2', state: false, brightness: 0},
      {id: 7, name: 'Ride', state: false, brightness: 0}
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
}
