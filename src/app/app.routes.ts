import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { HomePageComponent } from './components/pages/views/home-page/home-page.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutAdminComponent,
        children: [
            {
                path: '',
                redirectTo: "/home",
                pathMatch: "full"
            },
            {
                path: "home",
                component: HomePageComponent
            }
        ]
    },
    
];
