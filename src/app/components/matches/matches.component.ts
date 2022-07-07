import { FormGroup } from '@angular/forms';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any = [];
  searchForm: FormGroup;
  obj: any = {};
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.result;
      }
    )
  }

  search() {
    console.log("Here obj to search", this.obj);
    this.matchService.searchMatchByTeamOne(this.obj).subscribe(
      (data) => {
        console.log("Here data after search", data.result);
        this.matches = data.result;
      }
    );
  }

}
