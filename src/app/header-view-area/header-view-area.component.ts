import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-view-area',
  templateUrl: './header-view-area.component.html',
  styleUrls: ['./header-view-area.component.css']
})
export class HeaderViewAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createContactViewButton() {
    console.log('create Contact View');
  }
}
