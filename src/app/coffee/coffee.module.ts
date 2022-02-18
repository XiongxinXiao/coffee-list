import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeRoutes } from './coffee.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Coffee } from './coffee.model';
import { coffeeReducer } from './reducer';
import { CoffeeHttpService } from './coffee-http.service';
import { CoffeesEffects } from './coffee.effect';
import { CoffeesResolver } from './coffee.resolve';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CoffeeRoutes,
    StoreModule.forFeature("coffee", coffeeReducer),
    EffectsModule.forFeature([CoffeesEffects])
  ],
  declarations: [
    CoffeeComponent,
    TableComponent
  ],
  providers:[
    CoffeesResolver
  ]
})
export class CoffeeModule { }
