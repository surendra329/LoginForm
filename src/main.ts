import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http'; // ✅ import this
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
const appConfig = {
  providers: [
    provideHttpClient(),         // ✅ Required for HttpClient to work
    provideRouter(routes)        // ✅ Optional: only if using Angular Router
  ]
};
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
