import { createAction, props } from '@ngrx/store';
import { Coffee } from '../coffee.model';

export const loadAllCoffees = createAction(
  '[Coffees Resolver] Load All Coffees'
);

export const allCoffeesLoaded = createAction(
  '[Load Coffees Effect] All Coffees Loaded',
  props<{ coffees: Coffee[] }>()
);
