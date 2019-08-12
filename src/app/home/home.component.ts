import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allUsers: any[] = [];
  constructor(private UserServices: UsersService, private router: Router) { }

  ngOnInit() {
    this.UserServices.getAllUsers().subscribe((data: []) => {
      console.log("here are all users", data);
      this.allUsers = data;
    })
  }

}
