import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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

  constructor(private viewServicesService: ViewServicesService,
              private dataServices: DataServicesService) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  genderControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);

  genders: OptionGender[] = [
    {gender: 'Male', valu: 'm'},
    {gender: 'Female', valu: 'f'},
  ];

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
