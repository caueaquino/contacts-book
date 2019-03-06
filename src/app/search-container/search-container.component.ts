import { ContactStruct } from './../services/contactStruct';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataServicesService } from '../services/data-services.service';

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
  private contacts;
  private filteredContacts: Observable<string[]>;

  constructor(private dataServices: DataServicesService) {
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

    return this.contacts.filter(c => c.toLowerCase().indexOf(filterValue) === 0);
  }

  getCompleteNames() {
    let x=0;
    this.dataServices.getContacts$().toPromise().then((aux) => {
      this.contacts = aux;
      for (const contact of this.contacts) {
        x++;
        console.log(x);
        this.contacts.push(`${contact.firstName} ${contact.lastName}`);
      }
    });
  }
}
