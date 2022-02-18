import { Routes, RouterModule } from '@angular/router';
import { CoffeesResolver } from './coffee.resolve';
import { CoffeeComponent } from './coffee/coffee.component';

const routes: Routes = [
    {
        path: '',
        component: CoffeeComponent,
        resolve: {
            coffee: CoffeesResolver
        }
    }
];

export const CoffeeRoutes = RouterModule.forChild(routes);
