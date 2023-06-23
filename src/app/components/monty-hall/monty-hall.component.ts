import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MontyHall } from 'src/app/model/monty-hall.model';
import { MontyHallService } from 'src/app/service/monty-hall.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monty-hall',
  templateUrl: './monty-hall.component.html',
  styleUrls: ['./monty-hall.component.css'],
})
export class MontyHallComponent implements OnInit {
  resultList: any[] = [];
  subscribe : Subscription = new Subscription();

  constructor(public monty_hall: MontyHallService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.monty_hall.formData = new MontyHall();
  }

  onSubmit(form: NgForm) {


    this.subscribe.add(
    this.monty_hall.insertMontyHall(this.monty_hall.formData).subscribe(
      
      (res: any) => {
        console.log('Record inserted successfully!', res);
        this.resultList.push(res);
      },
      (error) => {
        console.log('Failed to insert record:', error);
      },
      () => {
        this.resetForm(form);
      }
    )
    );
  }
}
