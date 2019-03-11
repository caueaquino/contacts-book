import { ViewServicesService } from './../services/view-services.service';
import { DataServicesService } from './../services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { ContactStruct } from '../services/contactStruct';
import { GeneratedFile } from '@angular/compiler';
import { ApiServicesService } from '../services/api-services.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-info-area',
  templateUrl: './contact-info-area.component.html',
  styleUrls: ['./contact-info-area.component.css']
})
export class ContactInfoAreaComponent implements OnInit {

  private infoContact: ContactStruct;

  private genderInfo: string;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,

              private dialog: MatDialog) {
    this.infoContact = dataServices.getContact();
    this.setGenderInfo();
  }

  ngOnInit() {
  }

  verifyAvatar(contactAux: ContactStruct) {
    if (contactAux.info.avatar === '' || contactAux.info.avatar === null) {
      return false;

    } else {
      return true;
    }
  }

  setGenderInfo() {
    if (this.infoContact.gender === 'm') {
      this.genderInfo = 'Male';

    } else {
      this.genderInfo = 'Female';
    }
  }

  editContactInfoButton() {
    this.dataServices.setContact(this.infoContact);
  }

  deleteContactInfoButton() {
    this.dataServices.setContact(this.infoContact);
    this.dialog.open(DeleteDialog2Component);
  }

  favoriteContactInfoButton() {
    this.dataServices.setContact(this.infoContact);
    this.viewServices.chooseAlertToOpen(1);
  }
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: '../dialogs/delete-dialog/delete-dialog.component.html',
  styleUrls: ['../dialogs/delete-dialog/delete-dialog.component.css']
})
export class DeleteDialog2Component implements OnInit {

  private okDelete: boolean;

  constructor(private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dataServices: DataServicesService,
              private dialogRef: MatDialogRef<DeleteDialog2Component>) {

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
  }
}
