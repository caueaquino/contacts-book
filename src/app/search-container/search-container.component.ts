import { ContactStruct } from './../services/contactStruct';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataServicesService } from '../services/data-services.service';
import { ViewServicesService } from '../services/view-services.service';
import { stringify } from '@angular/core/src/util';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  private myControl = new FormControl();
  private contacts = [];
  private filteredContacts: Observable<any>;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService) {
    this.getCompleteNames();
  }

  ngOnInit() {
    this.filteredContacts = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.contacts.filter(c => (`${c.firstName} ${c.lastName}`).toLowerCase().indexOf(filterValue) === 0);
  }

  getCompleteNames() {
    this.dataServices.getContacts$().subscribe((c) => {
      this.contacts = c;
    });
  }

  verifyAvatar(contactAux: ContactStruct) {
    if (contactAux.info.avatar === '' || contactAux.info.avatar === null) {
      return false;

    } else {
      return true;
    }
  }

  buttonContactSearch(contactAux: ContactStruct) {
    this.viewServices.changeSearchOn();
    this.dataServices.setContact(contactAux);
    this.viewServices.changeWhatIsShowing(2);
  }
}
