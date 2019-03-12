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

import { CreateContactAreaComponent,
         CreateDialogComponent,
         EditDialogComponent,
         AlertDialogComponent } from './create-contact-area/create-contact-area.component';

import { HeaderViewAreaComponent } from './header-view-area/header-view-area.component';
import { ViewAreaComponent, FavoriteDialogComponent } from './view-area/view-area.component';
import { ViewServicesService } from './services/view-services.service';
import { DataServicesService } from './services/data-services.service';
import { ContactInfoAreaComponent,
         DeleteDialog2Component,
         FavoriteDialog2Component } from './contact-info-area/contact-info-area.component';
import { ApiAlertComponent } from './api-alert/api-alert.component';
import { DeleteDialogComponent } from './view-area/view-area.component';

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
    AlertDialogComponent,
    ApiAlertComponent,
    DeleteDialogComponent,
    DeleteDialog2Component,
    CreateDialogComponent,
    FavoriteDialog2Component
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
    DeleteDialog2Component,
    CreateDialogComponent,
    EditDialogComponent,
    AlertDialogComponent,
    FavoriteDialogComponent,
    FavoriteDialog2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
