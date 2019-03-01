import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private contact = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    info: {
        avatar: '',
        company: '',
        address: '',
        phone: '',
        comments: ''
    },
    isFavorite: false,
    id: ''
  };

  private contacts = [];

  private favorites = [];

  constructor() { }
}
