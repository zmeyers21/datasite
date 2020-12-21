import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataLoaded() {
    return sessionStorage.getItem('dataLoaded');
  }

  constructor(private http: HttpClient) { }

  getRegisteredUsers() {
    console.log('get registered users');
    const url = `https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers`;
    return this.http.get(url);
  }

  getUnregisteredUsers() {
    console.log('get unregistered users');
    const url = `https://5c3ce12c29429300143fe570.mockapi.io/api/unregisteredusers`;
    return this.http.get(url);
  }

  getProjectMemberships() {
    console.log('get project memberships');
    const url = `https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships`;
    return this.http.get(url);
  }

  setRegisteredUsers(users: string) {
    sessionStorage.setItem('registeredUsers', users);
  }

  setUnregisteredUsers(users: string) {
    sessionStorage.setItem('unregisteredUsers', users);
  }

  setMemberships(memberships: string) {
    sessionStorage.setItem('memberships', memberships);
  }
}
