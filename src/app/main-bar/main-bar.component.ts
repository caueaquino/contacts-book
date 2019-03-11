import { Component, OnInit } from '@angular/core';

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

  contactsMenuButton() {
    this.viewServicesService.chooseViewAreaType(0);
  }

  favoritesMenuButton() {
    this.viewServicesService.chooseViewAreaType(1);
  }

  searchButton() {
    this.viewServicesService.changeSearchOn();
  }
}
