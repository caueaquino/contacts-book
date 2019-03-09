import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HeaderViewAreaComponent } from './header-view-area/header-view-area.component';
import { ViewAreaComponent } from './view-area/view-area.component';
import { CreateContactAreaComponent } from './create-contact-area/create-contact-area.component';
import { ContactInfoAreaComponent } from './contact-info-area/contact-info-area.component';

const APP_ROUTES: Routes = [
    
    { path: '', component: ViewAreaComponent},
    { path: 'CreateContact', component: CreateContactAreaComponent},
    { path: 'ViewContact', component: ContactInfoAreaComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
