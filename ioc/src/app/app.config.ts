import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const URLAPI =new  InjectionToken<string>('urlapi');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {provide:URLAPI, useValue:'https://laughing-pancake-jxqgjxvg6jp3rgr-3000.app.github.dev/'}
  ]
};
