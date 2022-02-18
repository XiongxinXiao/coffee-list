import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../reducer';
import { select, Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs/operators';
import { loadAllCoffees } from './store/coffee.action';
import { areCoffeesLoaded } from './store/coffee.selector';

@Injectable()
export class CoffeesResolver implements Resolve<boolean> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(areCoffeesLoaded),
      tap((coffeesLoaded) => {
        if (!coffeesLoaded) {
          this.store.dispatch(loadAllCoffees());
        }
      }),
      filter((coffeesLoaded) => coffeesLoaded),
      first()
    );
  }
}
