import { ApiServicesService } from './../services/api-services.service';
import { ViewServicesService } from './../services/view-services.service';
import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  private okEdit: boolean;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService) {
    this.okEdit = false;
  }

  ngOnInit() {
  }

  confirmEdit() {
    this.apiServices.updateContact(this.dataServices.getContact().id, this.dataServices.getContactForm()).subscribe(
      success => (this.okEdit = true, this.dataServices.setAllContact()),
      error => this.viewServices.chooseAlertToOpen(5)
    );
  }

  cancelEdit() {
    this.viewServices.resetAlerts();
    this.dataServices.setAllContact();
  }

  okEditButton() {
    this.okEdit = false;
    this.viewServices.resetAlerts();
    this.viewServices.closeEditArea();
  }
}
