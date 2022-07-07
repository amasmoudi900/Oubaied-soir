import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches: any = [];
  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {
    // call service to get all matches
    this.matchService.getAllMatches().subscribe(
      (data) => {
        console.log("Here reponse from BE", data);
        this.matches = data.result;
      }
    );
  }

  goToDisplay(x) {
    // alert('Display is clicked');
    this.router.navigate([`matchInfo/${x}`]);
  }

  goToEdit(y) {
    this.router.navigate([`editMatch/${y}`]);
  }

  deleteMatch(id){
    this.matchService.deleteMatch(id).subscribe(
      (data)=> {
        console.log("Here message after delete", data.message);
        this.matchService.getAllMatches().subscribe(
          (data)=> {
            this.matches = data.result;
          }
        )
      }
    );
  }

}
