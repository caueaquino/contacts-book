import { Component, OnInit } from '@angular/core';

import { ViewServicesService } from './services/view-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private viewServicesService: ViewServicesService) { }

  ngOnInit() {

  }
}
