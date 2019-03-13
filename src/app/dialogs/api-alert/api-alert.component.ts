import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-api-alert',
  templateUrl: './api-alert.component.html',
  styleUrls: ['./api-alert.component.css']
})
export class ApiAlertComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ApiAlertComponent>) { }

  ngOnInit() {
  }

  okApiAlertButton() {
    this.dialogRef.close();
  }
}
