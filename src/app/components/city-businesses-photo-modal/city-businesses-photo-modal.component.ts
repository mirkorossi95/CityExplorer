import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-businesses-photo-modal',
  templateUrl: './city-businesses-photo-modal.component.html',
  styleUrls: ['./city-businesses-photo-modal.component.css'],
})
export class CityBusinessesPhotoModalComponent {
  @Input() namePhoto: string = '';

  @Input() urlPhoto: string = '';

  constructor() {
    //
  }
}
