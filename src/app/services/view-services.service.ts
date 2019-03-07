import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServicesService {

  private serchOn: boolean;

  private showViewArea: boolean;
  private isFavoriteViewArea: boolean;

  private showCreateContactArea: boolean;
  private isEditViewArea: boolean;

  private isEditFromInfo: boolean;

  private showInfoContactArea: boolean;

  private showViewContactDataArea: boolean;

  private showEditContactArea: boolean;

  private showConfirmDelete: boolean;
  private showConfirmFavorite: boolean;

  constructor() {
    this.serchOn = false;

    this.showViewArea = true;
    this.isFavoriteViewArea = false;

    this.showCreateContactArea = false;
    this.isEditViewArea = false;

    this.isEditFromInfo = false;

    this.showInfoContactArea = false;

    this.showViewContactDataArea = false;

    this.showEditContactArea = false;

    this.showConfirmDelete = false;
    this.showConfirmFavorite = false;
  }

  getSearchOn() {
    return this.serchOn;
  }

  getShowViewArea() {
    return this.showViewArea;
  }

  getShowCreateContactArea() {
    return this.showCreateContactArea;
  }

  getShowInfoContactArea() {
    return this.showInfoContactArea;
  }

  getShowViewContactDataArea() {
    return this.showViewContactDataArea;
  }

  getShowEditContactArea() {
    return this.showEditContactArea;
  }

  getIsEditFromInfo() {
    return this.isEditFromInfo;
  }

  getIsFavoriteViewArea() {
    return this.isFavoriteViewArea;
  }

  getIsEditViewArea() {
    return this.isEditViewArea;
  }

  getShowConfirmDelete() {
    return this.showConfirmDelete;
  }

  getShowConfirmFavorite() {
    return this.showConfirmFavorite;
  }

  changeSearchOn() {
    this.serchOn = !this.serchOn;
  }

  changeWhatIsShowing(option: number) {
    this.setAllViewsFalse();

    if (option === 0) {
      this.showViewArea = true;

    } else if (option === 1) {
      this.showCreateContactArea = true;

    } else if (option === 2) {
      this.showInfoContactArea = true;
    }
  }

  setAllViewsFalse() {
    this.showViewArea = false;
    this.showCreateContactArea = false;
    this.showViewContactDataArea = false;
    this.showEditContactArea = false;
    this.showInfoContactArea = false;
  }

  chooseViewAreaType(option: number) {
    if (option === 1) {
      this.isFavoriteViewArea = true;

    } else {
      this.isFavoriteViewArea = false;
    }

    this.changeWhatIsShowing(0);
  }


  changeIsEditFromInfo() {
    this.isEditFromInfo = !this.isEditFromInfo;
  }

  chooseEditArea() {
    this.isEditViewArea = true;
    this.changeWhatIsShowing(1);
  }

  closeEditArea() {
    this.isEditViewArea = false;
    this.changeWhatIsShowing(0);
  }

  chooseAlertToOpen(option: number) {
    this.resetAlerts();

    if (option === 0) {
      this.showConfirmDelete = true;

    } else if (option === 1) {
      this.showConfirmFavorite = true;
    }
  }

  resetAlerts() {
    this.showConfirmDelete = false;
    this.showConfirmFavorite = false;
  }
}
