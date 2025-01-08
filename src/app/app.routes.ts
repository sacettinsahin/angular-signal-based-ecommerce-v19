import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
   {
    path: '',
    component: MainComponent,
    children: [
        {
            path:'',
            pathMatch:'full',
            component: HomepageComponent
        },
        {
            path:'cart',
            component: CartComponent
        }
    ]
   }
];
