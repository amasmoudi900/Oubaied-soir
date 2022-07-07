import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  players: any = [];
  constructor() { }

  ngOnInit() {
    this.players = [
      { id: 1, name: 'Sleh', nbr: 12, position: "ATK" },
      { id: 2, name: 'Ali', nbr: 2, position: "GK" },
      { id: 3, name: 'Mohsen', nbr: 6, position: "MID" },
      { id: 4, name: 'Med', nbr: 3, position: "DEF" }
    ]
  }

}
