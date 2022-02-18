import { TestBed } from '@angular/core/testing';
import { TestModule } from '../test.module';
import { CoffeeComponent } from './coffee.component';

describe('CoffeeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestModule
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
});
