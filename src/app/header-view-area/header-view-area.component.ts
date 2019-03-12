import { Component, OnInit } from '@angular/core';

import { ViewServicesService } from './../services/view-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-view-area',
  templateUrl: './header-view-area.component.html',
  styleUrls: ['./header-view-area.component.css']
})
export class HeaderViewAreaComponent implements OnInit {

  private isFavorite = false;

  constructor(private viewServicesService: ViewServicesService,
              private route: Router) {
    this.isFavorite = this.verifyFavorites();
  }

  ngOnInit() {
  }

  verifyFavorites() {
    if (this.route.isActive('Favorites', true)) {
      return true;
    }

    return false;
  }
}
