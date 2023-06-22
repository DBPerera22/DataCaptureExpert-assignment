import { Injectable } from '@angular/core';
import { MontyHall } from '../model/monty-hall.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MontyHallService {
  readonly rootURL = 'http://localhost:5055/api/MontyHall/simulate';

  formData: MontyHall = new MontyHall();

  constructor(private http: HttpClient) {}

  insertMontyHall() {
    return this.http.post(this.rootURL, this.formData);
  }

  loadResult() {
    return this.http.get(this.rootURL);
  }
}
