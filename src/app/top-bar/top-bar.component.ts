import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  isSideBarOpen: boolean = false;

  ngOnInit() {

  }

  changeSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
    console.log(this.isSideBarOpen);
  }
}
