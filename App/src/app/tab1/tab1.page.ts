import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards = [
    { price: 'R$10', title: 'Lorem' },
    { price: 'R$10', title: 'Lorem' },
    { price: 'R$10', title: 'Lorem' },
    { price: 'R$10', title: 'Lorem' },
    { price: 'R$10', title: 'Lorem' },
    { price: 'R$10', title: 'Lorem' },
  ];
  constructor() {}

}
