import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeRoutes } from './coffee.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CoffeeRoutes
  ],
  declarations: [
    CoffeeComponent,
    TableComponent
  ]
})
export class CoffeeModule { }
