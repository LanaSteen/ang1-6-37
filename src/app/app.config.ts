import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './interceptors/api-interceptor';
import { CookieService } from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    CookieService,
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([apiInterceptor])
    )
  ]
};
