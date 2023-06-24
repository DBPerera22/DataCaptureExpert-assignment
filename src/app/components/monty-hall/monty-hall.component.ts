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
  subscribe: Subscription = new Subscription();
  numberOfRounds: number = 0;
  showForm: boolean = true;

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

  // Add a new variable to hold the click count
  clickCount: number = 0;

  // Add a click event handler
  onClick() {
    this.clickCount++;

    // Check if the click count equals the number of rounds
    if (this.clickCount === this.numberOfRounds) {
      // Hide the form
      this.showForm = false;
    }
  }
}
