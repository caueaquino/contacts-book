import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactButton() {
    console.log('contact');
  }

  favoriteButton() {
    console.log('favorite');
  }

  createContactMenuButton() {
    console.log('createa Contact');
  }
}
