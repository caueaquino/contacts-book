import { ApiServicesService } from './../services/api-services.service';
import { Component, OnInit } from '@angular/core';
import { ViewServicesService } from '../services/view-services.service';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-favorite-dialog',
  templateUrl: './favorite-dialog.component.html',
  styleUrls: ['./favorite-dialog.component.css']
})
export class FavoriteDialogComponent implements OnInit {

  private okFavorite: boolean;

  constructor(private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dataServices: DataServicesService) {
    this.okFavorite = false;
  }

  ngOnInit() {
  }

  confirmFavorite() {
    const contactAux = this.dataServices.getContact();

    contactAux.isFavorite = !contactAux.isFavorite;

    this.apiServices.updateContactFavorite(contactAux).subscribe(() => {
      this.okFavorite = true;
    });
  }

  okFavoriteButton() {
    this.okFavorite = false;
    this.viewServices.resetAlerts();
  }
}
