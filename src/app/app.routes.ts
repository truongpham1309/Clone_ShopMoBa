import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { TextComponent } from './components/pages/text/text.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutAdminComponent,
        children: [
            {
                path:'',
                component: TextComponent
            }
        ]
    }
];
