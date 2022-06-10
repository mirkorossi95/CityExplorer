import { ForecastResponse } from './forecast-response';
import { BusinessesSearchResponse } from './businesses-search-response';

export interface CityDetails {
  forecastResponse?: ForecastResponse;
  businessesSearch?: BusinessesSearchResponse;
}
