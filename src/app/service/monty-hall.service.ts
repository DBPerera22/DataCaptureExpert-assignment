import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MontyHall } from '../model/monty-hall.model';

@Injectable({
  providedIn: 'root',
})
export class MontyHallService {
  readonly rootURL = 'http://localhost:5055/api/MontyHall/simulate';

  formData: MontyHall = new MontyHall();

  constructor(private http: HttpClient) {}

  insertMontyHall(data: MontyHall): Observable<MontyHall> {
    return this.http.post<MontyHall>(this.rootURL, data);
  }
}
