import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServicesService {

  searchOn: boolean;

  private showApiAlert: boolean;

  constructor() {
    this.searchOn = false;

    this.showApiAlert = false;
  }

  getSearchOn() {
    return this.searchOn;
  }

  getShowApiAlert() {
    return this.showApiAlert;
  }

  searchOff() {
    this.searchOn = false;
  }

  changeSearchOn() {
    this.searchOn = !this.searchOn;
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
