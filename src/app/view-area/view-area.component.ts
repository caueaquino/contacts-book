import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';

import { DataServicesService } from '../services/data-services.service';
import { ViewServicesService } from '../services/view-services.service';
import { ApiServicesService } from '../services/api-services.service';
import { EditDialogComponent } from '../create-contact-area/create-contact-area.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css']
})
export class ViewAreaComponent implements OnInit {

  pageIndex: number;
  pageSize: number;
  lowValue: number;
  highValue: number;

  private cardContacts = null;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dialog: MatDialog,
              private route: Router) {

    this.pageIndex = 0;
    this.pageSize = 10;
    this.lowValue = 0;
    this.highValue = 10;

    this.dataServices.getContacts$().subscribe((c) => {
      this.cardContacts = c;
      this.cardContacts = this.returnContactsCards();
    });
  }

  ngOnInit() {
  }

getPaginatorData(event) {
  // console.log(event);
  if (event.pageIndex === this.pageIndex + 1) {
    this.lowValue = this.lowValue + this.pageSize;
    this.highValue =  this.highValue + this.pageSize;

  } else if (event.pageIndex === this.pageIndex - 1) {
    this.lowValue = this.lowValue - this.pageSize;
    this.highValue =  this.highValue - this.pageSize;
  }

  this.pageIndex = event.pageIndex;
}

  returnContactsCards() {
    const auxContacts = [];

    if (this.route.isActive('Favorites', true)) {
      for (const c of this.cardContacts) {
        if (c.isFavorite) {
          auxContacts.push(c);
        }
      }
      return auxContacts;
    }
    return this.cardContacts;
  }

  favoriteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.dialog.open(FavoriteDialogComponent);
  }

  viewContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.route.navigate(['/ViewContact', contactAux.id]);
  }

  deleteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.pageIndex = 0;
      this.pageSize = 10;
      this.lowValue = 0;
      this.highValue = 10;
    });
  }

  editContactCardButton(contactToEdit: ContactStruct) {
    this.dataServices.setContact(contactToEdit);
  }
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: '../dialogs/delete-dialog/delete-dialog.component.html',
  styleUrls: ['../dialogs/delete-dialog/delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  private okDelete: boolean;

  constructor(private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dataServices: DataServicesService,
              private dialogRef: MatDialogRef<DeleteDialogComponent>) {

      this.okDelete = false;
  }

  ngOnInit() {
  }

  confirmDelete() {
    this.apiServices.deleteContact(this.dataServices.getContact().id).subscribe(
      success => (this.okDelete = true, this.dataServices.setAllContact()),
      error => this.viewServices.chooseAlertToOpen(5)
    );
  }

  okDeleteButton() {
    this.dialogRef.close();
    ViewAreaComponent.call(ViewAreaComponent);
  }
}

@Component({
  selector: 'app-favorite-dialog',
  templateUrl: '../dialogs/favorite-dialog/favorite-dialog.component.html',
  styleUrls: ['../dialogs/favorite-dialog/favorite-dialog.component.css']
})
export class FavoriteDialogComponent implements OnInit {

  private okFavorite: boolean;

  constructor(private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dataServices: DataServicesService,
              private dialogRef: MatDialogRef<FavoriteDialogComponent>) {
    this.okFavorite = false;
  }

  ngOnInit() {
  }

  confirmFavorite() {
    const contactAux = this.dataServices.getContact();

    contactAux.isFavorite = !contactAux.isFavorite;

    this.apiServices.updateContactFavorite(contactAux).subscribe(
      success => this.okFavorite = true,
      error => (this.viewServices.chooseAlertToOpen(5), this.dataServices.setAllContact())
    );
  }

  cancelButtonFavorite() {
    this.dialogRef.close();
  }

  okFavoriteButton() {
    this.dialogRef.close();
    this.okFavorite = false;
  }
}
