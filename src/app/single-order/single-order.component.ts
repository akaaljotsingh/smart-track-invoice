import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


interface List {
  orderno: number;
  containerno: number;
  dueDate: string;
}

const LISTS: List[] = [
  {
    orderno: 1234,
    containerno: 347,
    dueDate: '01-01-19'
  },
  {
    orderno: 1234,
    containerno: 347,
    dueDate: '01-01-19'
  },
  {
    orderno: 1234,
    containerno: 347,
    dueDate: '01-01-19'
  },
  {
    orderno: 1234,
    containerno: 347,
    dueDate: '01-01-19'
  },
  {
    orderno: 1234,
    containerno: 347,
    dueDate: '01-01-19'
  },
  {
    orderno: 1234,
    containerno: 347,
    dueDate: '01-01-19'
  }
];

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent {

  lists = LISTS;

  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
