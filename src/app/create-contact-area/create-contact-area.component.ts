import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

import { ViewServicesService } from './../services/view-services.service';
import { DataServicesService } from '../services/data-services.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';
import { MatDialog, MatDialogRef } from '@angular/material';

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
              private route: Router,
              private dialog: MatDialog) {

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
      const dialogRef = this.dialog.open(CreateDialogComponent);

    } else {
      const dialogRef = this.dialog.open(AlertDialogComponent);
    }
  }

  confirmButtonEditContact() {
    if (this.formContact.valid) {
      this.dataServices.setContactForm(this.formContact.value);
      const dialogRef = this.dialog.open(EditDialogComponent);

    } else {
      const dialogRef = this.dialog.open(AlertDialogComponent);
    }
  }

  setUpFieldsForm() {
    if (this.route.isActive('EditContact', true) || this.route.isActive('ViewContact/EditContact', true)) {
      this.contactAux = this.dataServices.getContact();
      this.formContact.patchValue(this.contactAux);
    }
  }
}

@Component({
  selector: 'app-create-dialog',
  templateUrl: '../dialogs/create-dialog/create-dialog.component.html',
  styleUrls: ['../dialogs/create-dialog/create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  private okCreate: boolean;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private location: Location,
              private dialogRef: MatDialogRef<CreateDialogComponent>) {
    this.okCreate = false;
  }
  ngOnInit() {
  }

  confirmCreate() {
    this.apiServices.createContact(this.dataServices.getContactForm()).subscribe(
      success => (this.okCreate = true, this.dataServices.setAllContact()),
      error => (this.viewServices.chooseAlertToOpen(5), this.dataServices.setAllContact())
    );
  }

  cancelCreate() {
    this.dataServices.setAllContact();
    this.dialogRef.close();
  }

  okCreateButton() {
    this.dialogRef.close();
    this.okCreate = false;
  }
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: '../dialogs/edit-dialog/edit-dialog.component.html',
  styleUrls: ['../dialogs/edit-dialog/edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  private okEdit: boolean;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private location: Location,
              private dialogRef: MatDialogRef<EditDialogComponent>) {
    this.okEdit = false;
  }

  ngOnInit() {
  }

  confirmEdit() {
    this.apiServices.updateContact(this.dataServices.getContactForm()).subscribe(
      success => (this.okEdit = true, this.dataServices.setAllContact()),
      error => this.viewServices.chooseAlertToOpen(5)
    );
  }

  cancelEdit() {
    this.dataServices.setAllContact();
    this.dialogRef.close();
  }

  okEditButton() {
    this.dialogRef.close();
    this.okEdit = false;
    this.location.back();
  }
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: '../dialogs/alert-dialog/alert-dialog.component.html',
  styleUrls: ['../dialogs/alert-dialog/alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(private viewServices: ViewServicesService,
              private dialogRef: MatDialogRef<AlertDialogComponent>) { }

  ngOnInit() {
  }

  okAlertButton() {
    this.dialogRef.close();
  }
}
