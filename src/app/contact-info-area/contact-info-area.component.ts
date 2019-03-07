import { ViewServicesService } from './../services/view-services.service';
import { DataServicesService } from './../services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { ContactStruct } from '../services/contactStruct';
import { GeneratedFile } from '@angular/compiler';

@Component({
  selector: 'app-contact-info-area',
  templateUrl: './contact-info-area.component.html',
  styleUrls: ['./contact-info-area.component.css']
})
export class ContactInfoAreaComponent implements OnInit {

  private infoContact: ContactStruct;

  private genderInfo: string;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService) {
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
    this.viewServices.changeIsEditFromInfo();
    this.viewServices.chooseEditArea();
  }

  deleteContactInfoButton() {
    this.dataServices.setContact(this.infoContact);
    this.viewServices.chooseAlertToOpen(0);
  }

  favoriteContactInfoButton() {
    this.dataServices.setContact(this.infoContact);
    this.viewServices.chooseAlertToOpen(1);
  }
}
