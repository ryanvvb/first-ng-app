import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Render the app component at the top
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
