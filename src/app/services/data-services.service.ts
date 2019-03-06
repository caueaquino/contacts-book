import { Injectable } from '@angular/core';
import { ContactStruct } from './contactStruct';
import { ApiServicesService } from './api-services.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private contact: ContactStruct;

  private contacts$: Observable<ContactStruct[]>;

  private idToDelete: string;

  private idToFavorite: string;

  constructor(private apiServices: ApiServicesService) { }

  getContact() {
    return this.contact;
  }

  getContacts$() {
    return this.contacts$;
  }

  getIdToDelete() {
    return this.idToDelete;
  }

  getIdToFavorite() {
    return this.idToFavorite;
  }

  setContact(cont) {
    this.contact = cont;
  }

  setIdToDelete(id) {
    console.log(id);
    this.idToDelete = id;
  }

  setIdToFavorite(id) {
    console.log(id);
    this.idToFavorite = id;
  }

  setAllContact() {
    this.contacts$ = this.apiServices.getAllContacts();
  }
}
