import { Injectable } from '@angular/core';
import { ContactStruct } from './contactStruct';
import { ApiServicesService } from './api-services.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private contact: ContactStruct;

  private contactForm;

  contacts$: Observable<ContactStruct[]>;

  constructor(private apiServices: ApiServicesService) { }

  getContact() {
    return this.contact;
  }

  getContactForm() {
    return this.contactForm;
  }

  getContacts$() {
    return this.contacts$;
  }

  setContact(cont: ContactStruct) {
    this.contact = cont;
  }

  setContactForm(cf) {
    this.contactForm = cf;
  }

  setContacts$(aux$) {
    this.contacts$ = aux$;
  }

  setAllContact() {
    this.contacts$ = this.apiServices.getAllContacts();
  }
}
