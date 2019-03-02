import { Injectable } from '@angular/core';
import { Light } from './lights';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private lightsUrl = 'api/lights';  // URL to web api

  getLights(): Observable<Light[]> {
    return this.http.get<Light[]>(this.lightsUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET light by id. Will 404 if id not found */
  getLight(id: number): Observable<Light> {
    const url = `${this.lightsUrl}/${id}`;
    return this.http.get<Light>(url).pipe(
      tap(_ => this.log(`fetched light id=${id}`)),
      catchError(this.handleError<Light>(`getLight id=${id}`))
    );
  }

  /** PUT: update the light on the server */
  updateLight (light: Light): Observable<any> {
    return this.http.put(this.lightsUrl, light, httpOptions).pipe(
      tap(_ => this.log(`updated light id=${light.id}`)),
      catchError(this.handleError<any>('updateLight'))
    );
  }

  /** POST: add a new light to the server */
  addLight (light: Light): Observable<Light> {
    return this.http.post<Light>(this.lightsUrl, light, httpOptions).pipe(
      tap((newLight: Light) => this.log(`added hero w/ id=${newLight.id}`)),
      catchError(this.handleError<Light>('addLight'))
    );
  }

  /** DELETE: delete the light from the server */
  deleteLight (light: Light | number): Observable<Light> {
    const id = typeof light === 'number' ? light : light.id;
    const url = `${this.lightsUrl}/${id}`;

    return this.http.delete<Light>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted light id=${id}`)),
      catchError(this.handleError<Light>('deleteLight'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LightService: ${message}`);
  }
}
