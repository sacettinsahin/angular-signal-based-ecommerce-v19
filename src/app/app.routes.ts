import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component: HomepageComponent
    },
    {
        path:'cart',
        component: CartComponent
    }
];
