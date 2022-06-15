import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() businessesSearchResponse?: BusinessesSearchResponse;

  @Input() cityName?: string;

  @Output() setModalData: EventEmitter<any> = new EventEmitter();

  constructor() {
    //
  }

  setModalDataFn(value: any): void {
    this.setModalData.emit(value);
  }

  getCategories(categories: Category[]): string {
    let res: string = '';
    categories.forEach((category: Category) => {
      res += (res ? ', ' : '') + category.title;
    });
    return res;
  }
}
