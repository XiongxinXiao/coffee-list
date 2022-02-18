import { Component, OnInit } from '@angular/core';
import { CoffeeHttpService } from '../coffee-http.service';
import { Coffee } from '../coffee.model';
import mockData from '../data.json';
import {select, Store} from '@ngrx/store';
import { AppState } from 'src/app/reducer';
import { loadAllCoffees } from '../coffee.action';
import { map, Observable, tap } from 'rxjs';
import { selectAllCoffees } from '../coffee.selector';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
})
export class CoffeeComponent implements OnInit {
  coffeeList!: Observable<Coffee[]>;
  page = 1;
  pageSize = 10;
  collectionSize = 50;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.refreshCountries();
  }

  refreshCountries() {
    this.coffeeList = this.store.pipe(
      select(selectAllCoffees),
      map(coffees => {
        return coffees.slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
        )
      })
    );
  }
}
