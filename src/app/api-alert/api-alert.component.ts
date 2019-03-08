import { ViewServicesService } from './../services/view-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-alert',
  templateUrl: './api-alert.component.html',
  styleUrls: ['./api-alert.component.css']
})
export class ApiAlertComponent implements OnInit {

  constructor(private viewServices: ViewServicesService) { }

  ngOnInit() {
  }

  okApiAlertButton() {
    this.viewServices.resetAlerts();
  }
}
