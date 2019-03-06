import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactStruct } from './contactStruct';
import { tap } from 'rxjs/operators';

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
    this.http.delete(`${this.API}/${id}`);
  }
}
