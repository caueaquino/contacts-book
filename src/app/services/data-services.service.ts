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

  constructor(private apiServices: ApiServicesService) { }

  getContact() {
    return this.contact;
  }

  getContacts$() {
    return this.contacts$;
  }

  setContact(cont: ContactStruct) {
    this.contact = cont;
  }

  setAllContact() {
    this.contacts$ = this.apiServices.getAllContacts();
  }
}
