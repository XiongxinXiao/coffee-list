import { provideMockStore } from '@ngrx/store/testing';
import * as fromRoot from '../reducer';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';


export const TEST_PROVIDERS = [
  provideMockStore(),
];

@NgModule({
  declarations: [],
  imports: [
    RouterTestingModule.withRoutes([]),
    StoreModule.forRoot({ ...fromRoot.reducers }),
  ],
  exports: [RouterTestingModule, HttpClientTestingModule],
  providers: [...TEST_PROVIDERS],
})
export class TestModule {}