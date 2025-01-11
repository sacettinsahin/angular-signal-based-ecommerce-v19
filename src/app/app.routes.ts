import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';
import { MainComponent } from './layout/main/main.component';
import { CategoriesComponent } from './pages/categories/categories.component';

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
        },
        {
            path:'categories',
            component: CategoriesComponent
        }
    ]
   }
];
