import { ContactStruct } from './../services/contactStruct';
import { Component, OnInit} from '@angular/core';

import { DataServicesService } from '../services/data-services.service';
import { ViewServicesService } from '../services/view-services.service';
import { ApiServicesService } from '../services/api-services.service';

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

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService) {

    this.pageIndex = 0;
    this.pageSize = 10;
    this.lowValue = 0;
    this.highValue = 10;
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

  verifyRenderCard(contactFav: boolean) {
    if (this.viewServices.getIsFavoriteViewArea() && contactFav || !this.viewServices.getIsFavoriteViewArea()) {
      return true;
    }
    return false;
  }

  returnContactsCards(contacts) {
    const auxContacts = [];

    if (this.viewServices.getIsFavoriteViewArea()) {
      for (const c of contacts) {
        if (c.isFavorite) {
          auxContacts.push(c);
        }
      }
      return auxContacts;
    }
    return contacts;
  }

  favoriteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.viewServices.chooseAlertToOpen(1);
  }

  viewContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.viewServices.changeWhatIsShowing(2);
  }

  deleteContactCardButton(contactAux: ContactStruct) {
    this.dataServices.setContact(contactAux);
    this.viewServices.chooseAlertToOpen(0);
  }

  editContactCardButton(contactToEdit: ContactStruct) {
    this.dataServices.setContact(contactToEdit);
    this.viewServices.chooseEditArea();
  }
}
