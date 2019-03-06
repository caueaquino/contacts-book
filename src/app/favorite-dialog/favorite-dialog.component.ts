import { Component, OnInit } from '@angular/core';
import { ViewServicesService } from '../services/view-services.service';

@Component({
  selector: 'app-favorite-dialog',
  templateUrl: './favorite-dialog.component.html',
  styleUrls: ['./favorite-dialog.component.css']
})
export class FavoriteDialogComponent implements OnInit {

  private okFavorite: boolean;

  constructor(private viewServices: ViewServicesService) {
    this.okFavorite = false;
  }

  ngOnInit() {
  }

  confirmFavorite() {

    this.okFavorite = true;
  }

  okFavoriteButton() {
    this.okFavorite = false;
    this.viewServices.resetAlerts();
  }
}
