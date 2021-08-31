import { Component } from '@angular/core';
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dark-mode-society';

  constructor(
    public themeService: ThemeService
  ) {
  }
}
