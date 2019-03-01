import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServicesService {

  private showViewArea: boolean;
  private isFavoriteViewArea: boolean;

  private showCreateContactArea: boolean;
  private isEditViewArea: boolean;

  private showViewContactDataArea: boolean;

  private showEditContactArea: boolean;

  constructor() {
    this.showViewArea = true;
    this.isFavoriteViewArea = false;

    this.showCreateContactArea = false;
    this.isEditViewArea = false;

    this.showViewContactDataArea = false;

    this.showEditContactArea = false;
  }

  getShowViewArea() {
    return this.showViewArea;
  }

  getShowCreateContactArea() {
    return this.showCreateContactArea;
  }

  getShowViewContactDataArea() {
    return this.showViewContactDataArea;
  }

  getShowEditContactArea() {
    return this.showEditContactArea;
  }

  getIsFavoriteViewArea() {
    return this.isFavoriteViewArea;
  }

  getIsEditviewArea() {
    return this.isEditViewArea;
  }

  changeWhatIsShowing(option: number) {
    this.setAllViewsFalse();

    if (option === 0) {
      this.showViewArea = true;

    } else if (option === 1) {
      this.showCreateContactArea = true;
    }
  }

  setAllViewsFalse() {
    this.showViewArea = false;
    this.showCreateContactArea = false;
    this.showViewContactDataArea = false;
    this.showEditContactArea = false;
  }

  chooseViewAreaType(option: number) {

    if (option === 1) {
      this.isFavoriteViewArea = true;

    } else {
      this.isFavoriteViewArea = false;
    }

    this.changeWhatIsShowing(0);
  }

  chooseEditCreateArea(option: number) {
    if (option === 1) {
      this.isEditViewArea = true;

    } else {
      this.isEditViewArea = false;
    }

    this.changeWhatIsShowing(1);
  }
}
