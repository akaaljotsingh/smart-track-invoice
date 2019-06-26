import { Component, OnInit } from '@angular/core';

interface List {
  sno: number;
  orderno: number;
  desc: Container[];
  orderNumber: number;
  price: number;
}

interface Container {
  container: string;
  price: number;
}

const LISTS: List[] = [
  {
    sno: 1,
    orderno: 123,
    desc: [
      {
        container: 'container 1',
        price: 400
      },
      {
        container: 'container 2',
        price: 600
      },
      {
        container: 'container 3',
        price: 1000
      }
    ],
    orderNumber: 200,
    price: 2000
  },
  {
    sno: 2,
    orderno: 123,
    desc: [
      {
        container: 'container 1',
        price: 400
      },
      {
        container: 'container 2',
        price: 600
      },
      {
        container: 'container 3',
        price: 1000
      }
    ],
    orderNumber: 200,
    price: 2000
  },
  {
    sno: 3,
    orderno: 123,
    desc: [
      {
        container: 'container 1',
        price: 400
      },
      {
        container: 'container 2',
        price: 600
      },
      {
        container: 'container 3',
        price: 1000
      }
    ],
    orderNumber: 200,
    price: 2000
  },
];

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  lists = LISTS;

}
