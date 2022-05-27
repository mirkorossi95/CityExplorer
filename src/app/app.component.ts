import { Component } from '@angular/core';
import { OpenWeatherService } from './services/open-weather.service';
import { ForecastResponse } from './models/forecast-response';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  forecastResponseArr: ForecastResponse[] = [];
  cityToAdd = '';
  countryCode = 'IT';

  constructor(private openWeatherService: OpenWeatherService) {}

  addCity() {
    this.openWeatherService
      .directGeocoding(this.cityToAdd, this.countryCode, undefined, '1')
      .subscribe((resDG) => {
        this.openWeatherService
          .forecast5(
            String(resDG[0].lat),
            String(resDG[0].lon),
            undefined,
            undefined,
            undefined,
            'IT'
          )
          .subscribe((resF5) => {
            this.resetInput();
            this.forecastResponseArr.push(resF5);
            console.log(resF5);
          });
      });
  }

  resetInput() {
    this.cityToAdd = '';
    this.countryCode = 'IT';
  }

  canAddCity() {
    return this.forecastResponseArr.length < environment.maxCitiesToShow;
  }
}
