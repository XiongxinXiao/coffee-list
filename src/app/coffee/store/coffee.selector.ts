import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoffeeState } from './index';

import * as fromCoffees from './index';

export const selectCoffeeState = createFeatureSelector<CoffeeState>('coffee');

export const selectAllCoffees = createSelector(
  selectCoffeeState,
  fromCoffees.selectAll
);

export const areCoffeesLoaded = createSelector(
  selectCoffeeState,
  (state) => state.allCoffeesLoaded
);
