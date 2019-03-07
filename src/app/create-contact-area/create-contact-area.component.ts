import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

import { ViewServicesService } from './../services/view-services.service';
import { DataServicesService } from '../services/data-services.service';
import { $ } from 'protractor';

export interface OptionGender {
  gender: string;
  valu: string;
}

@Component({
  selector: 'app-create-contact-area',
  templateUrl: './create-contact-area.component.html',
  styleUrls: ['./create-contact-area.component.css']
})
export class CreateContactAreaComponent implements OnInit {

  private formContact: FormGroup;
  private contactAux: ContactStruct;

  constructor(private viewServicesService: ViewServicesService,
              private dataServices: DataServicesService,
              private formBuilder: FormBuilder) { }

  genders: OptionGender[] = [
    {gender: 'Male', valu: 'm'},
    {gender: 'Female', valu: 'f'},
  ];

  ngOnInit() {
    this.contactAux = this.dataServices.getContact();
    this.setUpFieldsForm();
  }

  confirmButtonCreateContact() {
    if (this.formContact.valid) {
      this.dataServices.setContactForm(this.formContact.value);
      this.viewServicesService.chooseAlertToOpen(3);
    } else {
      this.viewServicesService.chooseAlertToOpen(4);
    }
  }

  cancelButtonCreateContact() {
    this.viewServicesService.changeWhatIsShowing(0);
  }

  confirmButtonEditContact() {
    if (this.formContact.valid) {
      this.dataServices.setContactForm(this.formContact.value);
      this.viewServicesService.chooseAlertToOpen(2);
    } else {
      this.viewServicesService.chooseAlertToOpen(4);
    }
  }

  cancelButtonEditContact() {
    if (this.viewServicesService.getIsEditFromInfo()) {
      this.viewServicesService.changeWhatIsShowing(2);
      this.viewServicesService.changeIsEditFromInfo();

    } else {
      this.viewServicesService.closeEditArea();
    }
  }

  setUpFieldsForm() {
    if (this.viewServicesService.getIsEditViewArea()) {
      this.formContact = this.formBuilder.group({
        firstName: [this.contactAux.firstName, [Validators.required, Validators.minLength(3)]],
        lastName: [this.contactAux.lastName, [Validators.required, Validators.minLength(3)]],
        email: [this.contactAux.email, [Validators.required, Validators.email]],
        gender: [this.contactAux.gender],
        isFavorite: [this.contactAux.isFavorite],
        company: [this.contactAux.info.company, [Validators.required, Validators.minLength(3)]],
        avatar: [this.contactAux.info.avatar, [Validators.minLength(3)]],
        address: [this.contactAux.info.address, [Validators.minLength(3)]],
        phone: [this.contactAux.info.phone, [Validators.minLength(3)]],
        comments: [this.contactAux.info.comments, [Validators.minLength(3)]],
      });

    } else {
      this.formContact = this.formBuilder.group({
        firstName: [null, [Validators.required, Validators.minLength(3)]],
        lastName: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        gender: ['m'],
        isFavorite: [false],
        company: [null, [Validators.required, Validators.minLength(3)]],
        avatar: [null, [Validators.minLength(3)]],
        address: [null, [Validators.minLength(3)]],
        phone: [null, [Validators.minLength(3)]],
        comments: [null, [Validators.minLength(3)]],
      });
    }
  }
}
