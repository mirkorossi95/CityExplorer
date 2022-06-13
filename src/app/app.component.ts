import { Component } from '@angular/core';
import { OpenWeatherService } from './services/open-weather.service';
import { ForecastResponse } from './models/forecast-response';
import { environment } from '../environments/environment';
import { YelpService } from './services/yelp.service';
import { BusinessesSearchResponse } from './models/businesses-search-response';
import { DirectGeocodingResponse } from './models/direct-geocoding-response';
import { CityDetails } from './models/city-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  citiesArr: CityDetails[] = [];
  cityToAdd: string = '';
  countryCode: string = 'IT';

  constructor(
    private openWeatherService: OpenWeatherService,
    private yelpService: YelpService
  ) {}

  addCity(): void {
    let cityDetails: CityDetails = {};
    this.openWeatherService
      .directGeocoding(this.cityToAdd, this.countryCode, undefined, '1')
      .subscribe((directGeocodingResponseArr: DirectGeocodingResponse[]) => {
        const lat: string = String(directGeocodingResponseArr[0].lat);
        const lon: string = String(directGeocodingResponseArr[0].lon);
        this.openWeatherService
          .forecast5(lat, lon, 'metric', undefined, undefined, 'IT')
          .subscribe((forecastResponse: ForecastResponse) => {
            cityDetails.forecastResponse = forecastResponse;
            this.yelpService
              .businessesSearch(lat, lon, 'it_IT')
              .subscribe(
                (businessesSearchrResponse: BusinessesSearchResponse) => {
                  this.resetInput();
                  cityDetails.businessesSearch = businessesSearchrResponse;
                  this.citiesArr.push(cityDetails);
                }
              );
          });
      });
  }

  resetInput(): void {
    this.cityToAdd = '';
    this.countryCode = 'IT';
  }

  canAddCity(): boolean {
    return (
      this.citiesArr.length < environment.maxCitiesToShow &&
      !!this.cityToAdd &&
      !!this.countryCode
    );
  }
}
