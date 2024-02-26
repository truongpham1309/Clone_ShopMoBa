import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { ProductsAddComponent } from './components/pages/products/products-add/products-add.component';
import { ProductsEditComponent } from './components/pages/products/products-edit/products-edit.component';
import { ProductsListComponent } from './components/pages/products/products-list/products-list.component';
import { LoginComponent } from './components/pages/auths/login/login.component';
import { RegisterComponent } from './components/pages/auths/register/register.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "",
        canActivate: [adminGuard],
        component: LayoutAdminComponent,
        children: [
            {
                path: '',
                redirectTo: "/laptop",
                pathMatch: "full"
            },
            {
                path:'laptop',
                component: ProductsListComponent
            },
            {
                path:'products/add',
                component: ProductsAddComponent
            },
            {
                path:'products/edit/:id',
                component: ProductsEditComponent
            },
            {
                path: "**",
                component: NotfoundComponent,
            }
        ]
    },
    
];
