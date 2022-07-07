import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any = [];
  constructor() { }

  ngOnInit() {
    this.players = [
      { id: 1, name: "salah", nbr: 10, position: "ATK" },
      { id: 2, name: "Med", nbr: 7, position: "DEF" }
    ]
  }

}
