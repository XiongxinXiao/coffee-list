import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { CoffeeRoutes } from './coffee.routing';

@NgModule({
  imports: [
    CommonModule,
    CoffeeRoutes
  ],
  declarations: [CoffeeComponent]
})
export class CoffeeModule { }
