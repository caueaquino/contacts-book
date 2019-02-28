import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainBarComponent } from './main-bar/main-bar.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { CreateContactAreaComponent } from './create-contact-area/create-contact-area.component';
import { HeaderViewAreaComponent } from './header-view-area/header-view-area.component';
import { ViewAreaComponent } from './view-area/view-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBarComponent,
    SearchContainerComponent,
    CreateContactAreaComponent,
    HeaderViewAreaComponent,
    ViewAreaComponent
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
