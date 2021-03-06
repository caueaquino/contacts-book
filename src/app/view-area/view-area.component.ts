import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';

import { DataServicesService } from '../services/data-services.service';
import { ViewServicesService } from '../services/view-services.service';
import { ApiServicesService } from '../services/api-services.service';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { FavoriteDialogComponent } from '../dialogs/favorite-dialog/favorite-dialog.component';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css']
})
export class ViewAreaComponent implements OnInit {

  pageIndex: number;
  pageSize: number;
  lowValue: number;
  highValue: number;

  private cardContacts = null;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService,
              private dialog: MatDialog,
              private route: Router) {

    this.pageIndex = 0;
    this.pageSize = 10;
    this.lowValue = 0;
    this.highValue = 10;

    this.dataServices.getContacts$().subscribe((c) => {
      this.cardContacts = c;
      this.cardContacts = this.returnContactsCards(this.cardContacts);
    });
  }

  ngOnInit() {
  }

  getPaginatorData(event) {
    // console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue =  this.highValue + this.pageSize;

    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
    }

    this.pageIndex = event.pageIndex;
  }

  returnContactsCards(contactAux) {
    const auxContacts = [];

    if (this.route.isActive('Favorites', true)) {
      for (const c of contactAux) {
        if (c.isFavorite) {
          auxContacts.push(c);
        }
      }
      return auxContacts;
    }
    return contactAux;
  }

  favoriteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.dialog.open(FavoriteDialogComponent);
  }

  viewContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.route.navigate(['/ViewContact', contactAux.id]);
  }

  deleteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.pageIndex = 0;
      this.pageSize = 10;
      this.lowValue = 0;
      this.highValue = 10;
      this.dataServices.getContacts$().subscribe((c) => {
        this.cardContacts = c;
        this.cardContacts = this.returnContactsCards(this.cardContacts);
      });
    });
  }

  editContactCardButton(contactToEdit: ContactStruct) {
    this.dataServices.setContact(contactToEdit);
  }
}
