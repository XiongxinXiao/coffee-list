import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../coffee.model';

@Injectable()
export class CoffeeHttpService {
  constructor(private http: HttpClient) {}

  findAllCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(
      'https://random-data-api.com/api/coffee/random_coffee?size=50'
    );
  }
}
