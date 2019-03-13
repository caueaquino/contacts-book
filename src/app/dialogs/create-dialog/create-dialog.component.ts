import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ViewServicesService } from 'src/app/services/view-services.service';
import { DataServicesService } from 'src/app/services/data-services.service';
import { ApiAlertComponent } from '../api-alert/api-alert.component';

@Component({
    selector: 'app-create-dialog',
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.css']
  })
  export class CreateDialogComponent {

    private okCreate: boolean;
    private loading: boolean;

    constructor(private dataServices: DataServicesService,
                private viewServices: ViewServicesService,
                private apiServices: ApiServicesService,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<CreateDialogComponent>) {
      this.okCreate = false;
      this.loading = false;
    }

    confirmCreate() {
      this.loading = true;
      this.apiServices.createContact(this.dataServices.getContactForm()).subscribe(
        success => (this.loading = false, this.okCreate = true, this.dataServices.setAllContact(), this.viewServices.searchOff()),
        error => (this.dialogRef.close(), this.dialog.open(ApiAlertComponent), this.dataServices.setAllContact())
      );
    }

    cancelCreate() {
      this.dataServices.setAllContact();
      this.dialogRef.close();
    }

    okCreateButton() {
      this.dialogRef.close();
    }
  }
