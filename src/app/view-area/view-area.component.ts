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

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private apiServices: ApiServicesService) { }

  ngOnInit() {
  }

  verifyRenderCard(contactFav: boolean) {
    if (this.viewServices.getIsFavoriteViewArea() && contactFav || !this.viewServices.getIsFavoriteViewArea()) {
      return true;
    }
    return false;
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
