import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MontyHallService } from 'src/app/service/monty-hall.service';


@Component({
  selector: 'app-monty-hall',
  templateUrl: './monty-hall.component.html',
  styleUrls: ['./monty-hall.component.css'],
})
export class MontyHallComponent implements OnInit {
  constructor(public monty_hall: MontyHallService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.monty_hall.formData = {
      id: 0,
      simulation: 0,
    };
  }

  OnSubmit(form: NgForm) {
    console.log('clicked');
    this.InsertMontyHall();
  }

  InsertMontyHall(){
    this.monty_hall.insertMontyHall().subscribe(
      (res:any)=>{
        console.log('Successful!!');
      },
      err=>{
        console.log("Failed!!");
        console.log(err);
      }
    )
  }
}
