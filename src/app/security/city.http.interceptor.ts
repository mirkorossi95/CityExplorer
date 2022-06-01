import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export class CityHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes(environment.yelp.baseUrl)) {
      const newReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${environment.yelp.apiKey}`
        ),
      });
      return next.handle(newReq);
    } else {
      return next.handle(req);
    }
  }
}
