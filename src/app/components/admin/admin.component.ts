import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  x: Date;
  title: string = "here dashboard admin";
  constructor() { }

  ngOnInit() {
    this.x = new Date();
  }

}
