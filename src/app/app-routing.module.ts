import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesResolver } from './coffee/coffee.resolve';
import { CoffeeComponent } from './coffee/coffee/coffee.component';

const routes: Routes = [
  {
    path: '',
    component: CoffeeComponent,
    resolve: {
      coffee: CoffeesResolver
    }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
