import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DirectGeocodingResponse } from '../models/direct-geocoding-response';
import { ForecastResponse } from '../models/forecast-response';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  constructor(private httpClient: HttpClient) {}

  private static addParam(name: string, value?: string) {
    return value ? '&' + name + '=' + value : '';
  }

  /**
   * You can search weather forecast for 5 days with data every 3 hours by geographic coordinates. All weather data can be obtained in JSON and XML formats.
   * See [https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)
   * @param lat required Geographical coordinates (latitude, longitude). If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API.
   * @param lon required Geographical coordinates (latitude, longitude). If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API.
   * @param units optional Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
   * @param mode optional Response format. JSON format is used by default. To get data in XML format use mode=xml.
   * @param cnt optional A number of timestamps, which will be returned in the API response.
   * @param lang optional You can use the lang parameter to get the output in your language.
   * @returns 5 day weather forecast
   */
  forecast5(
    lat: string,
    lon: string,
    units?: string,
    mode?: string,
    cnt?: string,
    lang?: string
  ): Observable<ForecastResponse> {
    return this.httpClient.get<ForecastResponse>(
      'https://api.openweathermap.org/data/2.5/forecast?appid=' +
        environment.apiKeyOpenWeather +
        OpenWeatherService.addParam('lat', lat) +
        OpenWeatherService.addParam('lon', lon) +
        OpenWeatherService.addParam('units', units) +
        OpenWeatherService.addParam('mode', mode) +
        OpenWeatherService.addParam('cnt', cnt) +
        OpenWeatherService.addParam('lang', lang)
    );
  }

  /**
   * Direct geocoding allows to get geographical coordinates (lat, lon) by using name of the location (city name or area name). If you use the limit parameter in the API call, you can cap how many locations with the same name will be seen in the API response (for instance, London in the UK and London in the US).
   * See [https://openweathermap.org/api/geocoding-api](https://openweathermap.org/api/geocoding-api)
   * @param cityName required City name.
   * @param countryCode required Country code. Please use ISO 3166 country codes.
   * @param stateCode optional State code (only for the US).
   * @param limit optional Number of the locations in the API response (up to 5 results can be returned in the API response)
   * @returns Coordinates by location name
   */
  directGeocoding(
    cityName: string,
    countryCode: string,
    stateCode?: string,
    limit?: string
  ): Observable<DirectGeocodingResponse[]> {
    return this.httpClient.get<DirectGeocodingResponse[]>(
      'https://api.openweathermap.org/geo/1.0/direct?appid=' +
        environment.apiKeyOpenWeather +
        OpenWeatherService.addParam(
          'q',
          cityName + (stateCode ? ',' + stateCode : '') + ',' + countryCode
        ) +
        OpenWeatherService.addParam('limit', limit)
    );
  }
}
