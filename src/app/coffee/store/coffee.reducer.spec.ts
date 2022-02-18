import { coffeeReducer, initialCoffeesState, CoffeeState } from './index';
import * as CoffeeActions from './coffee.action';

describe('Coffee Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = coffeeReducer(initialCoffeesState, action);

      expect(result).toBe(initialCoffeesState);
    });
  });

  describe('set properly the coffees', () => {
    it('should set properly the language', () => {
      const coffees = [{
        "id": 1715,
        "uid": "65b6a310-fdeb-457a-870e-a82baea6d6b6",
        "blend_name": "Pumpkin-spice Symphony",
        "origin": "Mattari, Yemen",
        "variety": "Geisha",
        "notes": "wild, silky, green pepper, lychee, cantaloupe",
        "intensifier": "astringent"
      }];
      const action = CoffeeActions.allCoffeesLoaded({ coffees });
      const expected: CoffeeState = {
        ...initialCoffeesState,
        allCoffeesLoaded: true,
        ids: [1715],
        entities: {1715: coffees[0]}
      };
      const state = coffeeReducer(initialCoffeesState, action);
      expect(state).toEqual(expected);
    });
  });
});