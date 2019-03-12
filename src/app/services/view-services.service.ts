import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServicesService {

  serchOn: boolean;

  isFavoriteViewArea: boolean;

  private showApiAlert: boolean;

  constructor() {
    this.serchOn = false;

    this.isFavoriteViewArea = false;

    this.showApiAlert = false;
  }

  getSearchOn() {
    return this.serchOn;
  }

  getIsFavoriteViewArea() {
    return this.isFavoriteViewArea;
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

    if (option === 5) {
      this.showApiAlert = true;
    }
  }

  resetAlerts() {
    this.showApiAlert = false;
  }
}
