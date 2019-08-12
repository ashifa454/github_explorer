import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL: string = 'https://api.github.com'
  constructor(private http: HttpClient) { }
  /**
   * @description http function to get all users for home Page
   */
  getAllUsers() {
    console.log("call is here");
    return this.http.get(`${this.BASE_URL}/users`)
  }
  /**
   * @description http function to get User Details by userName
   */
  getUserDetails(userName) {
    return this.http.get(`${this.BASE_URL}/users/${userName}`)
  }
  /**
 * @description http function to get User Repositories by userName
 */
  getUserRepositories(userName) {
    return this.http.get(`${this.BASE_URL}/users/${userName}/repos`)
  }
  /**
   * @description http function to get list of followers for a user
   */
  getFollowersList(userName) {
    return this.http.get(`${this.BASE_URL}/users/${userName}/followers`)
  }
  /**
   * @description search user
   */
  searchUserName(userName) {
    return this.http.get(`${this.BASE_URL}/search/users?q=${userName}`)
  }
}
