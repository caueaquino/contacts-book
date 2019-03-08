import { ApiServicesService } from './../services/api-services.service';
import { ViewServicesService } from './../services/view-services.service';
import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  private okCreate: boolean;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService) {
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
    this.viewServices.resetAlerts();
    this.dataServices.setAllContact();
  }

  okCreateButton() {
    this.okCreate = false;
    this.viewServices.resetAlerts();
    this.viewServices.closeEditArea();
  }
}
