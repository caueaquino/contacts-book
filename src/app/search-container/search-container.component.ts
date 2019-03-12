import { ContactStruct } from './../services/contactStruct';
import {Component, OnInit, ViewChild, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataServicesService } from '../services/data-services.service';
import { ViewServicesService } from '../services/view-services.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

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
  private avatarExist = true;

  constructor(private dataServices: DataServicesService,
              private viewServices: ViewServicesService,
              private location: Location,
              private route: Router) {
    this.getCompleteNames();
  }

  ngOnInit() {
    this.filteredContacts = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    this.getCompleteNames();
    const filterValue = value.toLowerCase();

    return this.contacts.filter(c => (`${c.firstName} ${c.lastName}`).toLowerCase().indexOf(filterValue) === 0);
  }

  backSearch() {
    this.viewServices.changeSearchOn();
  }

  getCompleteNames() {
    this.dataServices.getContacts$().subscribe((c) => {
      this.contacts = c;
    });
  }

  buttonContactSearch(contactAux: ContactStruct) {
    this.viewServices.changeSearchOn();
    this.dataServices.setContact(contactAux);
    this.route.navigate(['/ViewContact', contactAux.id]);
  }
}
