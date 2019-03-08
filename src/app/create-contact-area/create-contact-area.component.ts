import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

import { ViewServicesService } from './../services/view-services.service';
import { DataServicesService } from '../services/data-services.service';

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

  private contactAux: ContactStruct;

  private formContact = this.formBuilder.group({
    firstName: [null, [Validators.required, Validators.minLength(3)]],
    lastName: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    gender: ['m'],
    info : {
      avatar: [null, [Validators.minLength(3)]],
      company: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, [Validators.minLength(3)]],
      phone: [null, [Validators.minLength(3)]],
      comments: [null, [Validators.minLength(3)]],
    },
    isFavorite: [false],
    id: [null]
  });

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
// alterar formatto
  setUpFieldsForm() {
    if (this.viewServicesService.getIsEditViewArea()) {
      this.formContact.patchValue(this.contactAux);
    }
  }
}
