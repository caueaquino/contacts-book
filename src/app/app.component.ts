import { Component, OnInit } from '@angular/core';

import { ViewServicesService } from './services/view-services.service';
import { DataServicesService } from './services/data-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private viewServicesService: ViewServicesService,
              private dataServices: DataServicesService) { }

  ngOnInit() {
    this.dataServices.setAllContact();
  }

  verifyConfirmAlerts() {
    if (this.viewServicesService.getShowConfirmFavorite()) {
      return true;
    }
    return false;
  }
}
