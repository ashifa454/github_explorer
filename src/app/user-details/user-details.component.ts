import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  data: any = {};
  repos: any[] = [];
  followers: any[] = [];
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usersService.getUserDetails(params.get('username')).subscribe((data: {}) => {
        this.data = data;
      })
      this.usersService.getUserRepositories(params.get('username')).subscribe((data: []) => {
        this.repos = data;
      });
      this.usersService.getFollowersList(params.get('username')).subscribe((data: []) => {
        this.followers = data;
      });
    })
  }
  showInfo(link) {

    window.open(link, '_blank');
  }
}
