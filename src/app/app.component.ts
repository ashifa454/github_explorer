import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'githubExplorer';
  isSearchActive = false;
  searchQuery = "";
  options = [];
  constructor(private userServices: UsersService, private router: Router) { }
  toggleSearchbar() {
    this.isSearchActive = !this.isSearchActive;
  }
  handleSearchUser(f: NgForm) {
    console.log(f.form.value.searchQuery);
    // e.preventDefault();
    // alert("SUBMITTED");
  }
  handleInputChange(event: any) {
    this.searchQuery = event.target.value;
    if (this.searchQuery.length > 3) {
      this.userServices.searchUserName(this.searchQuery).subscribe((data: any) => {
        this.options = [];
        const users = data.items.slice(0, 10)
        users.map((item) => {
          this.options.push(item.login)
        })
      })
    }
  }
  optionSelected(event: any) {
    this.isSearchActive = false;
    this.router.navigate(['users', event.option.value]);
  }
}
