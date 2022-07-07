import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  constructor(
    private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
  }

  addMatch(){
    console.log("Here match object", this.match);
    this.matchService.addMatch(this.match).subscribe(
      (data)=> {
        console.log("Here data after match save", data.message);
        this.router.navigate(["admin"]);
      }
    );
  }

}
