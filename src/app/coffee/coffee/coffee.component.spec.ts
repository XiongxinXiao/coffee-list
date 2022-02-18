import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/reducer';
import { CoffeeModule } from '../coffee.module';
import { CoffeeComponent } from './coffee.component';

describe('CoffeeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoffeeModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        HttpClientModule
      ],
      declarations: [
        CoffeeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should fetch the Coffee list from store', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    const app = fixture.componentInstance;
    app.coffeeList.subscribe(result => expect(result.length).toBeGreaterThan(0));
  });
});