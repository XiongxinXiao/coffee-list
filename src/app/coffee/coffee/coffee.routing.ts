import { Routes, RouterModule } from '@angular/router';
import { CoffeeComponent } from './coffee.component';

const routes: Routes = [
  { path: '',
    component: CoffeeComponent }
];

export const CoffeeRoutes = RouterModule.forChild(routes);
