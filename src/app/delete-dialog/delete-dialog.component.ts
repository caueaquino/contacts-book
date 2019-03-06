import { Component, OnInit } from '@angular/core';
import { ViewServicesService } from '../services/view-services.service';
import { ApiServicesService } from '../services/api-services.service';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  private okDelete: boolean;

  constructor(private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dataServices: DataServicesService) {
      this.okDelete = false;
  }

  ngOnInit() {
  }

  confirmDelete() {
    this.apiServices.deleteContact(this.dataServices.getContact().id).subscribe(() => {
      this.okDelete = true;
      this.dataServices.setAllContact();
    });
  }

  okDeleteButton() {
    this.okDelete = false;
    this.viewServices.resetAlerts();
  }
}
