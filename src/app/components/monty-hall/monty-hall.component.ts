import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MontyHall } from 'src/app/model/monty-hall.model';
import { MontyHallService } from 'src/app/service/monty-hall.service';

@Component({
  selector: 'app-monty-hall',
  templateUrl: './monty-hall.component.html',
  styleUrls: ['./monty-hall.component.css'],
})
export class MontyHallComponent implements OnInit {
  resultList: MontyHall[] = [];

  constructor(public monty_hall: MontyHallService) {}

  ngOnInit(): void {
    this.resetForm();
    // this.loadResult();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.monty_hall.formData = new MontyHall();
  }

  OnSubmit(form: NgForm) {
    this.monty_hall.insertMontyHall(this.monty_hall.formData).subscribe({
      next: (res: MontyHall) => {
        console.log('Record inserted successfully!');
        this.resultList.push(res);
      },
      error: (error) => {
        console.log('Failed to insert record:', error);
      },
      complete: () => {
        this.resetForm(form);
      },
    });
  }
}
