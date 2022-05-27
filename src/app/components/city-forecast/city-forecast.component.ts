import { Component, Input, OnInit } from '@angular/core';
import { ForecastResponse } from '../../models/forecast-response';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css'],
})
export class CityForecastComponent implements OnInit {
  @Input()
  forecastResponse?: ForecastResponse;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }
}
