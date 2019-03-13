import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
    styleUrls: ['./alert-dialog.component.css']
  })
  export class AlertDialogComponent {

    constructor(private dialogRef: MatDialogRef<AlertDialogComponent>) { }

    okAlertButton() {
      this.dialogRef.close();
    }
  }
