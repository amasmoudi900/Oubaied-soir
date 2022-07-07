import { WeatherService } from './../../services/weather.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForm: FormGroup;
  obj: any = {};

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

  searchWeather(){
    this.weatherService.search(this.obj).subscribe();
  }

}
