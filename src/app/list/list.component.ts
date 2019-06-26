import { Component } from '@angular/core';

interface List {
  billto: string;
  invoiceDate: string;
  dueDate: string;
}

const LISTS: List[] = [
  {
    billto: 'Russia',
    invoiceDate: '01-01-19',
    dueDate: '01-01-19'
  },
  {
    billto: 'Test',
    invoiceDate: '01-01-19',
    dueDate: '01-01-19'
  },
  {
    billto: 'Franko',
    invoiceDate: '01-01-19',
    dueDate: '01-01-19'
  },
  {
    billto: 'CTZ',
    invoiceDate: '01-01-19',
    dueDate: '01-01-19'
  },
  {
    billto: 'Memo',
    invoiceDate: '01-01-19',
    dueDate: '01-01-19'
  },
  {
    billto: 'Russia',
    invoiceDate: '01-01-19',
    dueDate: '01-01-19'
  }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  lists = LISTS;

}
