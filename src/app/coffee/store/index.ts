import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { allCoffeesLoaded } from './coffee.action';
import { Coffee } from '../coffee.model';

export interface CoffeeState extends EntityState<Coffee> {
  allCoffeesLoaded: boolean;
}

export const adapter = createEntityAdapter<Coffee>({});

export const initialCoursesState = adapter.getInitialState({
  allCoffeesLoaded: false,
});

export const coffeeReducer = createReducer(
  initialCoursesState,

  on(allCoffeesLoaded, (state, action) =>
    adapter.setAll(action.coffees, { ...state, allCoffeesLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
