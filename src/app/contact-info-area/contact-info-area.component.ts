import { ViewServicesService } from './../services/view-services.service';
import { DataServicesService } from './../services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { ContactStruct } from '../services/contactStruct';
import { GeneratedFile } from '@angular/compiler';
import { ApiServicesService } from '../services/api-services.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { FavoriteDialogComponent } from '../dialogs/favorite-dialog/favorite-dialog.component';

@Component({
  selector: 'app-contact-info-area',
  templateUrl: './contact-info-area.component.html',
  styleUrls: ['./contact-info-area.component.css']
})
export class ContactInfoAreaComponent implements OnInit {

  private infoContact: ContactStruct;

  private genderInfo: string;

  private avatarExist = true;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.infoContact = this.dataServices.getContact();
      this.setGenderInfo();
      this.avatarExist = this.verifyAvatar(this.infoContact);
    });
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
    this.dialog.open(DeleteDialogComponent);
  }

  favoriteContactInfoButton() {
    this.dataServices.setContact(this.infoContact);
    this.dialog.open(FavoriteDialogComponent);
  }
}