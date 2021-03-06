import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { CityHttpInterceptor } from './security/city.http.interceptor';
import { CityBusinessesComponent } from './components/city-businesses/city-businesses.component';
import { CityBusinessesPhotoModalComponent } from './components/city-businesses-photo-modal/city-businesses-photo-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CityForecastComponent,
    CityBusinessesComponent,
    CityBusinessesPhotoModalComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CityHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
