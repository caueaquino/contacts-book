import { DataServicesService } from '../../services/data-services.service';
import { ApiServicesService } from '../../services/api-services.service';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ApiAlertComponent } from '../api-alert/api-alert.component';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.css']
  })
  export class DeleteDialogComponent {

    private okDelete: boolean;
    private loading: boolean;

    constructor(private apiServices: ApiServicesService,
                private dataServices: DataServicesService,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<DeleteDialogComponent>) {
        this.loading = false;
        this.okDelete = false;
    }

    confirmDelete() {
      this.loading = true;
      this.apiServices.deleteContact(this.dataServices.getContact().id).subscribe(
        success => (this.loading = false, this.okDelete = true),
        error => (this.dialogRef.close(), this.dialog.open(ApiAlertComponent))
      );
    }

    okDeleteButton() {
      this.dialogRef.close();
      this.dataServices.setAllContact();
    }
  }
