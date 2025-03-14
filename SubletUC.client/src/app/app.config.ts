// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------
// import { ApplicationConfig, ErrorHandler, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { PreloadAllModules, provideRouter, TitleStrategy, UrlSerializer, withPreloading } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';

import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

// import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// import { routes } from './app.routes';
// import { AppErrorHandler } from './app-error.handler';


export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes, withPreloading(PreloadAllModules)),
    // provideHttpClient(withInterceptorsFromDi()),
    // provideCharts(withDefaultRegisterables()),
    // provideAnimations(),
    // importProvidersFrom(
      // TranslateModule.forRoot({
        // loader: { provide: TranslateLoader, useClass: TranslateLanguageLoader }
      // })
    // ),
    // { provide: ErrorHandler, useClass: AppErrorHandler },
    // { provide: TitleStrategy, useClass: AppTitleService },
    // { provide: UrlSerializer, useClass: LowerCaseUrlSerializer }
    provideRouter(routes)
  ]
};
