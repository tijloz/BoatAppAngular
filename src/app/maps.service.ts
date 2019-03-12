import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location>('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDmeuRDj4XQR3MPTxaN7Wh1uaevNhKUATA'); //https://ipapi.co/json/
  }
}
