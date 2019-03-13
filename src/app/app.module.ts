import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatCardModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';

import { MainBarComponent } from './main-bar/main-bar.component';
import { SearchContainerComponent } from './search-container/search-container.component';

import { CreateContactAreaComponent } from './create-contact-area/create-contact-area.component';

import { HeaderViewAreaComponent } from './header-view-area/header-view-area.component';

import { ViewAreaComponent } from './view-area/view-area.component';
import { FavoriteDialogComponent } from './dialogs/favorite-dialog/favorite-dialog.component';
import { ViewServicesService } from './services/view-services.service';
import { DataServicesService } from './services/data-services.service';
import { ContactInfoAreaComponent } from './contact-info-area/contact-info-area.component';
import { ApiAlertComponent } from './dialogs/api-alert/api-alert.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { CreateDialogComponent } from './dialogs/create-dialog/create-dialog.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MainBarComponent,
    SearchContainerComponent,
    CreateContactAreaComponent,
    HeaderViewAreaComponent,
    ViewAreaComponent,
    FavoriteDialogComponent,
    ContactInfoAreaComponent,
    EditDialogComponent,
    ApiAlertComponent,
    DeleteDialogComponent,
    CreateDialogComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    routing
  ],
  providers: [
    ViewServicesService,
    DataServicesService
  ],
  entryComponents: [
    DeleteDialogComponent,
    CreateDialogComponent,
    EditDialogComponent,
    FavoriteDialogComponent,
    ApiAlertComponent,
    AlertDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
