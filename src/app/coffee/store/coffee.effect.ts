import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { allCoffeesLoaded, loadAllCoffees } from './coffee.action';
import { CoffeeHttpService } from '../service/coffee-http.service';

@Injectable()
export class CoffeesEffects {
  loadCoffees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllCoffees),
      concatMap((action) => this.coffeeService.findAllCoffees()),
      map((coffees) => allCoffeesLoaded({ coffees }))
    )
  );

  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeHttpService
  ) {}
}
