import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactStruct } from './contactStruct';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private readonly API = 'http://contacts-api.azurewebsites.net/api/contacts';

  constructor(private http: HttpClient) { }

  public getAllContacts() {
    return this.http.get<ContactStruct[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }

  public deleteContact(id: string) {
    const url = `${this.API}/${id}`;

    return this.http.delete(url, httpOptions);
  }

  public createContact(contactAux: ContactStruct) {
    contactAux = this.setContactToSend(contactAux);

    const postContact = this.setContactData(contactAux);

    return this.http.post<ContactStruct>(this.API, postContact, httpOptions);
  }

  public updateContact(contactAux: ContactStruct) {

    contactAux = this.setContactToSend(contactAux);

    const putContact = this.setContactData(contactAux);

    const url = `${this.API}/${contactAux.id}`;

    return this.http.put<ContactStruct>(url, putContact, httpOptions);
  }

  setContactData(contactAux: ContactStruct) {
    const Contact = {
      firstName: contactAux.firstName,
      lastName: contactAux.lastName,
      email: contactAux.email,
      gender: contactAux.gender,
      isFavorite: contactAux.isFavorite,
      company: contactAux.info.company,
      avatar: contactAux.info.avatar,
      address: contactAux.info.address,
      phone: contactAux.info.phone,
      comments: contactAux.info.comments
    };

    return Contact;
  }

  setContactToSend(contactAux: ContactStruct) {
    if (contactAux.info.phone === '') {
      contactAux.info.phone = null;
    }

    if (contactAux.info.address === '') {
      contactAux.info.address = null;
    }

    return contactAux;
  }
}
