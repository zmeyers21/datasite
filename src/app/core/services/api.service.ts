import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membership } from '../models/membership.model';
import { RegisteredUser } from '../models/registered-user.model';
import { UnregisteredUser } from '../models/unregistered-user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = 'https://5c3ce12c29429300143fe570.mockapi.io/api';

  getRegisteredUsers() {
    const url = `${this.baseUrl}/registeredusers`;
    return this.http.get<RegisteredUser[]>(url);
  }

  getUnregisteredUsers() {
    const url = `${this.baseUrl}/unregisteredusers`;
    return this.http.get<UnregisteredUser[]>(url);
  }

  getProjectMemberships() {
    const url = `${this.baseUrl}/projectmemberships`;
    return this.http.get<Membership[]>(url);
  }
  
}
