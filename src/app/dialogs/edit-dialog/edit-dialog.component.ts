import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ViewServicesService } from 'src/app/services/view-services.service';
import { DataServicesService } from 'src/app/services/data-services.service';
import { Location } from '@angular/common';
import { ApiAlertComponent } from '../api-alert/api-alert.component';

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.css']
  })
  export class EditDialogComponent {

    private okEdit: boolean;
    private loading: boolean;

    constructor(private dataServices: DataServicesService,
                private viewServices: ViewServicesService,
                private apiServices: ApiServicesService,
                private location: Location,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<EditDialogComponent>) {
      this.okEdit = false;
      this.loading = false;
    }

    confirmEdit() {
      this.loading = true;
      this.apiServices.updateContact(this.dataServices.getContactForm()).subscribe(
        success => (this.loading = false,
                    this.okEdit = true,
                    this.dataServices.setAllContact(),
                    this.dataServices.setContact(this.dataServices.getContactForm()),
                    this.viewServices.searchOff()),
        error => (this.dialogRef.close(), this.dialog.open(ApiAlertComponent))
      );
    }

    cancelEdit() {
      this.dataServices.setAllContact();
      this.dialogRef.close();
    }

    okEditButton() {
      this.dialogRef.close();
      this.location.back();
    }
  }
