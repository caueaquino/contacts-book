import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

import { ViewServicesService } from './../services/view-services.service';
import { DataServicesService } from '../services/data-services.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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

  private formContact = this.formBuilder.group({
    firstName: [null, [Validators.required, Validators.minLength(3)]],
    lastName: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    gender: ['m'],

    info: this.formBuilder.group({
      avatar: [null, [Validators.minLength(3)]],
      company: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, [Validators.minLength(3)]],
      phone: [null, [Validators.minLength(3)]],
      comments: [null, [Validators.minLength(3)]],
    }),
    id: [null],
    isFavorite: [false]
  });

  private contactAux;

  constructor(private viewServicesService: ViewServicesService,
              private dataServices: DataServicesService,
              private formBuilder: FormBuilder,
              private location: Location,
              private route: Router) {

    this.setUpFieldsForm();
  }

  genders: OptionGender[] = [
    {gender: 'Male', valu: 'm'},
    {gender: 'Female', valu: 'f'},
  ];

  ngOnInit() {
    this.setUpFieldsForm();
  }

  confirmButton() {
    if (this.route.isActive('CreateContact', true)) {
      this.confirmButtonCreateContact();

    } else {
      this.confirmButtonEditContact();
    }
  }

  confirmButtonCreateContact() {
    if (this.formContact.valid) {
      this.dataServices.setContactForm(this.formContact.value);
      this.viewServicesService.chooseAlertToOpen(3);
    } else {
      this.viewServicesService.chooseAlertToOpen(4);
    }
  }

  confirmButtonEditContact() {
    if (this.formContact.valid) {
      this.dataServices.setContactForm(this.formContact.value);
      this.viewServicesService.chooseAlertToOpen(2);
    } else {
      this.viewServicesService.chooseAlertToOpen(4);
    }
  }

  setUpFieldsForm() {
    if (this.route.isActive('EditContact', true) || this.route.isActive('ViewContact/EditContact', true)) {
      this.contactAux = this.dataServices.getContact();
      this.formContact.patchValue(this.contactAux);
    }
  }
}
