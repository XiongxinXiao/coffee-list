import { Component, OnInit } from '@angular/core';
import { CoffeeHttpService } from '../coffee-http.service';
import { Coffee } from '../coffee.model';
import mockData from '../data.json';
import {select, Store} from '@ngrx/store';
import { AppState } from 'src/app/reducer';
import { loadAllCoffees } from '../coffee.action';
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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.coffeeList = mockData;
    this.collectionSize = this.coffeeList.length;
    this.refreshCountries();
    this.store.dispatch(loadAllCoffees())
  }

  refreshCountries() {
    this.coffeeList = mockData.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
