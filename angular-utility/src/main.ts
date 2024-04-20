import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { environment } from './environments/environtment';

if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppModule, appConfig)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
