import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
// Angular components comprise the UI of the application
// They are the building blocks of the application
// Components are defined using the @Component decorator
// The decorator provides metadata about the component
// The metadata includes the selector, template, and styles
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      padding: 16px;
    }

    `],
})
export class AppComponent {
  title = 'first-ng-app';
}
