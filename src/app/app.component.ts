import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from './services/open-weather.service';
import { ForecastResponse } from './models/forecast-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  responseForecast5?: ForecastResponse;

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit(): void {
    this.openWeatherService
      .directGeocoding('Pisa', 'IT', undefined, '1')
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
            this.responseForecast5 = resF5;
            console.log(resF5);
          });
      });
  }
}
