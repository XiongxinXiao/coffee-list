import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesResolver } from './coffee/coffee.resolve';
import { CoffeeComponent } from './coffee/coffee/coffee.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./coffee/coffee.module').then(m => m.CoffeeModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
