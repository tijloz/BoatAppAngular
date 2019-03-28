import {Injectable} from '@angular/core';
import {Protection} from './protections';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProtectionService {
  fakeDB: Protection[] = [new Protection(0, 'Anchor', 0, 0.00, 0.00),
    new Protection(1, 'Outdrive', 0, 0.00, 0.00),
    new Protection(2, 'Prop', 0, 0.00, 0.00)
  ];

  private protectionsUrl = 'api/protections';  // URL to web api

  getProtections(): Observable<Protection[]> {
    return new Observable(observer => {
      observer.next(this.fakeDB);
      observer.complete();
    });
    // return this.http.get<Protection[]>(this.protectionsUrl)
    //   .pipe(
    //     catchError(this.handleError('getProtections', []))
    //   );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  // /** GET light by id. Will 404 if id not found */
  /**
   * getProtection
   *
   * @param id   not used?
   */
  getProtection(id: number): Observable<Protection> {
    return new Observable(observer => {
      // const url = `${this.protectionsUrl}/${id}`;
      // return this.http.get<Protection>(url).pipe(
      //   // tap(_ => this.log(`fetched light id=${id}`)),
      //   catchError(this.handleError<Protection>(`getProtection id=${id}`))
      // );

      const protection: Protection = this.fakeDB.filter(element => (element.id === id))[0];

      observer.next(protection);
      observer.complete();


    });
  }

  /** PUT: update the light on the server */
  updateProtection(protection: Protection): Observable<any> {
    return this.http.put(this.protectionsUrl, protection, httpOptions).pipe(
      tap(_ => this.log(`updated protection id=${protection.id}`)),
      catchError(this.handleError<any>('updateProtection'))
    );
  }

  /** POST: add a new light to the server */
  addProtection(protection: Protection): Observable<Protection> {
    return this.http.post<Protection>(this.protectionsUrl, protection, httpOptions).pipe(
      tap((newProtection: Protection) => this.log(`added protection w/ id=${newProtection.id}`)),
      catchError(this.handleError<Protection>('addProtection'))
    );
  }

  /** DELETE: delete the light from the server */
  deleteProtection(protection: Protection | number): Observable<Protection> {
    const id = typeof protection === 'number' ? protection : protection.id;
    const url = `${this.protectionsUrl}/${id}`;

    return this.http.delete<Protection>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted protection id=${id}`)),
      catchError(this.handleError<Protection>('deleteProtection'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a LightService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProtectionService: ${message}`);
  }
}
