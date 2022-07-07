import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  id: any;
  constructor(
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log("Here data", data);
        this.match = data.result;
      }
    )
  }

  editMatch() {
    console.log("Here new object",this.match );
    this.matchService.updateMatch(this.match).subscribe(
      (data)=> {
        console.log("Here Result after update", data.message);
        this.router.navigate(["admin"]);
      }
    );
    
  }

}
