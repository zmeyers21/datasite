import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Membership } from '../models/membership.model';
import { RegisteredUser } from '../models/registered-user.model';
import { UnregisteredUser } from '../models/unregistered-user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private apiService: ApiService) {
    this.fetchData();
  }

  private readonly _registeredUsers = new BehaviorSubject<RegisteredUser[]>([]);
  private readonly _unregisteredUsers = new BehaviorSubject<UnregisteredUser[]>([]);
  private readonly _memberships = new BehaviorSubject<Membership[]>([]);

  readonly registeredUsers$ = this._registeredUsers.asObservable();
  readonly unregisteredUsers$ = this._unregisteredUsers.asObservable();
  readonly memberships$ = this._memberships.asObservable();

  get registeredUsers(): RegisteredUser[] {
    return this._registeredUsers.getValue();
  }
  
  get unregisteredUsers(): UnregisteredUser[] {
    return this._unregisteredUsers.getValue();
  }
  
  get memberships(): Membership[] {
    return this._memberships.getValue();
  }

  set registeredUsers(val: RegisteredUser[]) {
    this._registeredUsers.next(val);
  }

  set unregisteredUsers(val: UnregisteredUser[]) {
    this._unregisteredUsers.next(val);
  }

  set memberships(val: Membership[]) {
    this._memberships.next(val);
  }

  async removeRegisteredUser(id: string) {
    const user = this.registeredUsers.find(u => u.id === id);
    this.registeredUsers = this.registeredUsers.filter(user => user.id !== id);
  }

  async addUser(user: RegisteredUser) {
    this.registeredUsers.push(user);
  }

  async fetchData() {
    this.registeredUsers = await this.apiService.getRegisteredUsers().toPromise();
    this.unregisteredUsers = await this.apiService.getUnregisteredUsers().toPromise();
    this.memberships = await this.apiService.getProjectMemberships().toPromise();
  }
}
