import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee.model';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { map, Observable } from 'rxjs';
import { selectAllCoffees } from '../store/coffee.selector';
@Component({
  selector: 'app-coffee',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.refreshCoffees();
  }

  refreshCoffees() {
    this.coffeeList = this.store.pipe(
      select(selectAllCoffees),
      map((coffees) => {
        return coffees.slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
        );
      })
    );
  }
}
