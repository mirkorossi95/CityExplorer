import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonService } from './common.service';
import { BusinessesSearchResponse } from '../models/businesses-search-response';

@Injectable({
  providedIn: 'root',
})
export class YelpService {
  constructor(private httpClient: HttpClient) {}

  /**
   * This endpoint returns up to 1000 businesses based on the provided search criteria. It has some basic information about the business.
   * Note: at this time, the API does not return businesses without any reviews.
   * See [https://www.yelp.com/developers/documentation/v3/business_search](https://www.yelp.com/developers/documentation/v3/business_search) for more optional params.
   * @param latitude required -- Latitude of the location you want to search nearby.
   * @param longitude required -- Longitude of the location you want to search nearby.
   * @returns business matching filter criteria
   */
  businessesSearch(latitude: string, longitude: string) {
    return this.httpClient.get<BusinessesSearchResponse>(
      environment.yelp.baseUrl +
        environment.yelp.endpoint.businessesSearch +
        CommonService.addParams([
          { name: 'latitude', value: latitude },
          { name: 'longitude', value: longitude },
        ])
    );
  }
}
