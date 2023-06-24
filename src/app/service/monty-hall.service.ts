import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MontyHall } from '../model/monty-hall.model';

@Injectable({
  providedIn: 'root',
})
export class MontyHallService {
  readonly rootURL = 'http://localhost:5055/api/MontyHall/play';

  formData: MontyHall = new MontyHall();

  constructor(private http: HttpClient) {}

  insertMontyHall(data: any): Observable<any> {
    console.log(data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.rootURL, data, { headers });
  }


}
