import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MontyHall, PlayRequest } from 'src/app/model/monty-hall.model';
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
  numberOfRounds: number = 1;
  showForm: boolean = true;
  clickCount: number = 0;

  constructor(public monty_hall: MontyHallService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.monty_hall.formData = new MontyHall();
  }

  onSubmit(form: NgForm) {
    this.clickCount++;

    var req = new PlayRequest();
    req.InitialDoorSelection = this.monty_hall.formData.InitialDoorSelection;
    req.ChangeDoor = this.monty_hall.formData.ChangeDoor == '1' ? true : false;

    console.log(req);
    this.subscribe.add(
      this.monty_hall.insertMontyHall(req).subscribe(
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
    if (this.clickCount === this.numberOfRounds) {
      // Hide the form
      this.showForm = false;
    }
  }

}
