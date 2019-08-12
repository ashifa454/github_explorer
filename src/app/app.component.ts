import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'githubExplorer';
  isSearchActive = false;
  toggleSearchbar() {
    this.isSearchActive = !this.isSearchActive;
  }
}
