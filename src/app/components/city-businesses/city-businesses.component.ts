import { Component, Input } from '@angular/core';
import {
  BusinessesSearchResponse,
  Category,
} from '../../models/businesses-search-response';

@Component({
  selector: 'app-city-businesses',
  templateUrl: './city-businesses.component.html',
  styleUrls: ['./city-businesses.component.css'],
})
export class CityBusinessesComponent {
  @Input()
  businessesSearchResponse?: BusinessesSearchResponse;

  @Input()
  cityName?: string;

  name: string = '';
  url: string = '';

  constructor() {
    //
  }

  getCategories(categories: Category[]): string {
    let res: string = '';
    categories.forEach((category: Category) => {
      res += (res ? ', ' : '') + category.title;
    });
    return res;
  }

  setModalData(name: string, url: string): void {
    this.name = name;
    this.url = url;
  }
}
