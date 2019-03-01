import { Component, OnInit } from '@angular/core';

import { ViewServicesService } from './../services/view-services.service';

@Component({
  selector: 'app-header-view-area',
  templateUrl: './header-view-area.component.html',
  styleUrls: ['./header-view-area.component.css']
})
export class HeaderViewAreaComponent implements OnInit {

  constructor(private viewServicesService: ViewServicesService) { }

  ngOnInit() {
  }
}
