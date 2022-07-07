import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput: any;
  constructor() { }

  ngOnInit() {
  }

  scoreColor(a, b) {
    if (a > b) {
      return 'green';
    } else if (a < b) {
      return 'yellow';
    } else {
      return 'blue';
    }
  }

  scoreResult(a, b) {
    if (a > b) {
      return 'Win';
    } else if (a < b) {
      return 'Loss';
    } else {
      return 'Draw';
    }
  }



}
