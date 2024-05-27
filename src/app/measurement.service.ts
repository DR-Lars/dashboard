import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeasurementService {
  private apiUrl =
    'http://api.derooverit.com/latest-measurement/station=ANT001BE';

  constructor(private http: HttpClient) {}

  getLatestMeasurement(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
