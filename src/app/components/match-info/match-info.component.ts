import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  id: any;
  match:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit() {
    // Get id value from URL with activated route
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("Here id", this.id);
    // Call service to get object by ID
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log("Here finded match from BE", data.result);
        console.log("Here message", data.message);
        this.match = data.result;
      }
    );
  }

}
