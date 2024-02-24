import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { TextComponent } from './components/pages/text/text.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutAdminComponent,
        children: [
            {
                path:'',
                component: TextComponent
            },
            {
                path: "**",
                component: NotfoundComponent,
            }
        ]
    }
];
