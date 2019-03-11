import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';

import { DataServicesService } from '../services/data-services.service';
import { ViewServicesService } from '../services/view-services.service';
import { ApiServicesService } from '../services/api-services.service';

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

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dialog: MatDialog) {

    this.pageIndex = 0;
    this.pageSize = 10;
    this.lowValue = 0;
    this.highValue = 10;
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

  verifyRenderCard(contactFav: boolean) {
    if (this.viewServices.getIsFavoriteViewArea() && contactFav || !this.viewServices.getIsFavoriteViewArea()) {
      return true;
    }
    return false;
  }

  returnContactsCards(contacts) {
    const auxContacts = [];

    if (this.viewServices.getIsFavoriteViewArea()) {
      for (const c of contacts) {
        if (c.isFavorite) {
          auxContacts.push(c);
        }
      }
      return auxContacts;
    }
    return contacts;
  }

  favoriteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.viewServices.chooseAlertToOpen(1);
  }

  viewContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
  }

  deleteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
