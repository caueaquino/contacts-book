import { DataServicesService } from './../services/data-services.service';
import { Component, OnInit } from '@angular/core';
import { ViewServicesService } from '../services/view-services.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(private viewServices: ViewServicesService,
              private dataServices: DataServicesService) { }

  ngOnInit() {
  }

  okAlertButton() {
    this.viewServices.resetAlerts();
  }
}
