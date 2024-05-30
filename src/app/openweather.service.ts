import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpenweatherService {
  private apiUrl =
    'http://api.openweathermap.org/data/2.5/forecast?lat=35.513828&lon=24.018038&appid=19470ea5bd3d3a5c3b01cdbc1621fe8e';

  constructor(private http: HttpClient) {}

  getForecast(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
