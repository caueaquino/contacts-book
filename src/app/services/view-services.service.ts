import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServicesService {

  serchOn: boolean;

  isFavoriteViewArea: boolean;

  private showConfirmFavorite: boolean;
  private showConfirmEdit: boolean;
  private showConfirmCreate: boolean;
  private showAlert: boolean;
  private showApiAlert: boolean;

  constructor() {
    this.serchOn = false;

    this.isFavoriteViewArea = false;

    this.showConfirmFavorite = false;
    this.showConfirmEdit = false;
    this.showConfirmCreate = false;
    this.showAlert = false;
    this.showApiAlert = false;
  }

  getSearchOn() {
    return this.serchOn;
  }

  getIsFavoriteViewArea() {
    return this.isFavoriteViewArea;
  }

  getShowConfirmFavorite() {
    return this.showConfirmFavorite;
  }

  getShowConfirmEdit() {
    return this.showConfirmEdit;
  }

  getShowConfirmCreate() {
    return this.showConfirmCreate;
  }

  getShowAlert() {
    return this.showAlert;
  }

  getShowApiAlert() {
    return this.showApiAlert;
  }

  changeSearchOn() {
    this.serchOn = !this.serchOn;
  }

  chooseViewAreaType(option: number) {
    if (option === 1) {
      this.isFavoriteViewArea = true;

    } else {
      this.isFavoriteViewArea = false;
    }
  }

  chooseAlertToOpen(option: number) {
    this.resetAlerts();

    if (option === 1) {
      this.showConfirmFavorite = true;

    } else if (option === 2) {
      this.showConfirmEdit = true;

    } else if (option === 3) {
      this.showConfirmCreate = true;

    } else if (option === 4) {
      this.showAlert = true;

    } else if (option === 5) {
      this.showApiAlert = true;
    }
  }

  resetAlerts() {
    this.showConfirmFavorite = false;
    this.showConfirmEdit = false;
    this.showConfirmCreate = false;
    this.showAlert = false;
    this.showApiAlert = false;
  }
}
