import { DataServicesService } from './data-services.service';
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

  public createContact(contactAux) {
    const postContact = this.setContactStruct(contactAux);

    return this.http.post(this.API, postContact, httpOptions);
  }

  public updateContact(contactAux) {
    const putContact = this.setContactStruct(contactAux);

    return this.http.put(`${this.API}/${contactAux.id}`, putContact, httpOptions);
  }

  public updateContactFavorite(contactAux: ContactStruct) {

    const putContact = this.setContactStruct(contactAux);

    const url = `${this.API}/${contactAux.id}`;

    return this.http.put(url, putContact, httpOptions);
  }

  setContactStruct(contactAux) {
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

  setUpDataContact(contactAux) {
    if (contactAux.avatar === '') {
      contactAux.avatar = null;
    }

    if (contactAux.address === '') {
      contactAux.address = null;
    }

    if (contactAux.phone === '') {
      contactAux.phone = null;
    }

    if (contactAux.comments === '') {
      contactAux.comments = null;
    }
  }
}
