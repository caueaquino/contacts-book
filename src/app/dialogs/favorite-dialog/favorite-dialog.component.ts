import { ApiAlertComponent } from './../api-alert/api-alert.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DataServicesService } from './../../services/data-services.service';
import { ApiServicesService } from './../../services/api-services.service';
import { Component } from '@angular/core';
import { ViewServicesService } from 'src/app/services/view-services.service';

@Component({
    selector: 'app-favorite-dialog',
    templateUrl: './favorite-dialog.component.html',
    styleUrls: ['./favorite-dialog.component.css']
  })
  export class FavoriteDialogComponent {

    private okFavorite: boolean;
    private loading: boolean;

    constructor(private viewServices: ViewServicesService,
                private apiServices: ApiServicesService,
                private dataServices: DataServicesService,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<FavoriteDialogComponent>) {
      this.okFavorite = false;
      this.loading = true;
    }

    confirmFavorite() {
      this.loading = false;

      const contactAux = this.dataServices.getContact();

      contactAux.isFavorite = !contactAux.isFavorite;

      this.apiServices.updateContactFavorite(contactAux).subscribe(
        success => (this.loading = true, this.okFavorite = true),
        error => (this.dialogRef.close(),
                  this.dialog.open(ApiAlertComponent),
                  contactAux.isFavorite = !contactAux.isFavorite,
                  this.dataServices.setAllContact())
      );
    }

    cancelButtonFavorite() {
      this.dialogRef.close();
    }

    okFavoriteButton() {
      this.dialogRef.close();
    }
  }
