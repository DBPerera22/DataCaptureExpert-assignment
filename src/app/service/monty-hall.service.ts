import { Injectable } from '@angular/core';
import { MontyHall } from '../model/monty-hall.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MontyHallService {
  readonly rootURL = 'http://localhost:port/api/';
  formData: MontyHall = new MontyHall();
  constructor(private http: HttpClient) {}

  insertMontyHall() {
    console.log(this.formData);
    return this.http.post(this.rootURL, this.formData);
  }
}
