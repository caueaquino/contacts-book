import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  myControl = new FormControl();
  contacts: string[] = ['Mario', 'Maria', 'Joao'];
  filteredContacts: Observable<string[]>;

  constructor() { }

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
}