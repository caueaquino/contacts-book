import { Component, OnInit, OnChanges } from '@angular/core';

import { ViewServicesService } from './../services/view-services.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {

  constructor(private viewServicesService: ViewServicesService) { }

  ngOnInit() {
  }

  searchButton() {
    this.viewServicesService.changeSearchOn();
  }
}
