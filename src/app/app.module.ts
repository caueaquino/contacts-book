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
  MatProgressSpinnerModule
} from '@angular/material';

import { MainBarComponent } from './main-bar/main-bar.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { CreateContactAreaComponent } from './create-contact-area/create-contact-area.component';
import { HeaderViewAreaComponent } from './header-view-area/header-view-area.component';
import { ViewAreaComponent } from './view-area/view-area.component';
import { ViewServicesService } from './services/view-services.service';
import { DataServicesService } from './services/data-services.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FavoriteDialogComponent } from './favorite-dialog/favorite-dialog.component';
import { ContactInfoAreaComponent } from './contact-info-area/contact-info-area.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ApiAlertComponent } from './api-alert/api-alert.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MainBarComponent,
    SearchContainerComponent,
    CreateContactAreaComponent,
    HeaderViewAreaComponent,
    ViewAreaComponent,
    DeleteDialogComponent,
    FavoriteDialogComponent,
    ContactInfoAreaComponent,
    CreateDialogComponent,
    EditDialogComponent,
    AlertDialogComponent,
    ApiAlertComponent
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
    routing
  ],
  providers: [
    ViewServicesService,
    DataServicesService
  ],
  // entryComponents: [
  //   MatDialogModule
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
