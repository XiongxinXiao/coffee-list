import { TestModule } from '../test.module';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CoffeeHttpService } from './coffee-http.service';

describe('CoffeeService', () => {
  let service: CoffeeHttpService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    });
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    service = new CoffeeHttpService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected coffees', (done: DoneFn) => {
    const coffees = [{
        "id": 1715,
        "uid": "65b6a310-fdeb-457a-870e-a82baea6d6b6",
        "blend_name": "Pumpkin-spice Symphony",
        "origin": "Mattari, Yemen",
        "variety": "Geisha",
        "notes": "wild, silky, green pepper, lychee, cantaloupe",
        "intensifier": "astringent"
      }];
    httpClientSpy.get.and.returnValue(of(coffees));
    service.findAllCoffees().subscribe((_) => {
      expect(_).toEqual(coffees);
      done();
    }, done.fail);
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});