import { CoffeeHttpService } from '../service/coffee-http.service';
import { TestModule } from '../test.module';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { CoffeesEffects } from './coffee.effect';
import * as CoffeeActions from './coffee.action';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';

describe('CoffeeEffects', () => {
  let actions$ = new Observable<Action>();
  let effects: CoffeesEffects;
  let coffeeService: CoffeeHttpService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      providers: [CoffeesEffects, provideMockActions(() => actions$), CoffeeHttpService],
    });

    effects = TestBed.inject(CoffeesEffects);
    coffeeService = TestBed.inject(CoffeeHttpService);
    httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should return expected coffees', (done: DoneFn) => {
    const coffees = [
      {
        id: 1715,
        uid: '65b6a310-fdeb-457a-870e-a82baea6d6b6',
        blend_name: 'Pumpkin-spice Symphony',
        origin: 'Mattari, Yemen',
        variety: 'Geisha',
        notes: 'wild, silky, green pepper, lychee, cantaloupe',
        intensifier: 'astringent',
      },
    ];
    actions$ = of(CoffeeActions.loadAllCoffees);
    httpClientSpy.get.and.returnValue(of(coffees));
    effects.loadCoffees$.subscribe(action => {
      expect(action).toEqual(CoffeeActions.allCoffeesLoaded({coffees}));
      
    });
    done();
  });
});
