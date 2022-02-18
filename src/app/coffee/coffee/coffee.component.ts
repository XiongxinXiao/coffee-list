import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee.model';
import mockData from '../data.json';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
})
export class CoffeeComponent implements OnInit {
  coffeeList!: Coffee[];
  page = 1;
  pageSize = 10;
  collectionSize = 0;

  constructor() {}

  ngOnInit() {
    this.coffeeList = mockData;
    this.collectionSize = this.coffeeList.length;
    this.refreshCountries();
  }

  refreshCountries() {
    this.coffeeList = mockData.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
