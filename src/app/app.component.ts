import { Component } from '@angular/core';
import { OpenWeatherService } from './services/open-weather.service';
import { ForecastResponse } from './models/forecast-response';
import { environment } from '../environments/environment';
import { YelpService } from './services/yelp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  forecastResponseArr: ForecastResponse[] = [];
  cityToAdd = '';
  countryCode = 'IT';

  constructor(
    private openWeatherService: OpenWeatherService,
    private yelpService: YelpService
  ) {}

  addCity() {
    this.openWeatherService
      .directGeocoding(this.cityToAdd, this.countryCode, undefined, '1')
      .subscribe((resDG) => {
        const lat = String(resDG[0].lat);
        const lon = String(resDG[0].lon);
        this.openWeatherService
          .forecast5(lat, lon, undefined, undefined, undefined, 'IT')
          .subscribe((resF5) => {
            this.resetInput();
            this.forecastResponseArr.push(resF5);
            this.yelpService
              .businessesSearch(lat, lon)
              .subscribe((res) => console.log(res));
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
