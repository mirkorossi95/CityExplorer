import { Component, Input } from '@angular/core';
import { ForecastResponse } from '../../models/forecast-response';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css'],
})
export class CityForecastComponent {
  @Input()
  forecastResponse?: ForecastResponse;

  constructor() {
    //
  }

  getTimezone(input: number) {
    const hours = input / 3600;
    return 'GMT+' + hours;
  }
}
