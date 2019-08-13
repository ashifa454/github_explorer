import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserCacheService } from '../user-cache.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allUsers: any[] = [];
  constructor(private UserServices: UsersService, private router: Router, private userCache: UserCacheService) {
  }

  ngOnInit() {
    this.requestAllUsers();
  }
  async requestAllUsers() {
    try {
      await this.userCache.initializeDb()
      let users: any = await this.userCache.getUsers();
      this.allUsers = users;
      this.UserServices.getAllUsers().subscribe((data: []) => {
        this.allUsers = data;
        this.userCache.insertUsers(data).then((data) => {
          console.log("Data added")
        });
      })
    } catch (err) {
      console.log("here is error", err);
      // this.UserServices.getAllUsers().subscribe((data: []) => {
      //   this.allUsers = data;
      // })
    }
  }
}
