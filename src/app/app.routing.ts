import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ViewAreaComponent } from './view-area/view-area.component';
import { CreateContactAreaComponent } from './create-contact-area/create-contact-area.component';
import { ContactInfoAreaComponent } from './contact-info-area/contact-info-area.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'Contacts', pathMatch: 'full'},
    { path: 'Contacts/CreateContact', redirectTo: 'CreateContact', pathMatch: 'full'},
    { path: 'Favorites/CreateContact', redirectTo: 'CreateContact', pathMatch: 'full'},
    { path: 'Contacts/EditContact', redirectTo: 'EditContact', pathMatch: 'full'},
    { path: 'Favorites/EditContact', redirectTo: 'EditContact', pathMatch: 'full'},
    { path: 'Contacts/ViewContact/:id', redirectTo: 'ViewContact/:id', pathMatch: 'full'},
    { path: 'Favorites/ViewContact/:id', redirectTo: 'ViewContact/:id', pathMatch: 'full'},
    { path: 'ViewContact/:id/EditContact', redirectTo: 'EditContact', pathMatch: 'full'},
    { path: 'Contacts', component: ViewAreaComponent},
    { path: 'Favorites', component: ViewAreaComponent},
    { path: 'CreateContact', component: CreateContactAreaComponent},
    { path: 'EditContact', component: CreateContactAreaComponent},
    { path: 'ViewContact/:id', component: ContactInfoAreaComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: 'reload' });
