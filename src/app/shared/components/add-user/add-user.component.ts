import { Component, OnInit } from '@angular/core';
import { RegisteredUser } from 'src/app/core/models/registered-user.model';
import { DataStoreService } from 'src/app/core/services/data-store.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(public dataStore: DataStoreService) { }

  ngOnInit() {
  }

  addUser() {
    // This code will just generate a random user
    const randomId: number = Math.floor(Math.random() * (10000 - 99 + 1) + 99);
    const user: RegisteredUser = {
      id: randomId.toString(),
      firstName: 'Test User',
      lastName: randomId.toString(),
      city: 'Test City',
      state: 'MN',
      zipCode: '12345',
      country: 'USA',
      company: 'Datasite',
      organizationType: 'Test Type',
      phone: '763.867.5309',
      disclaimerAccepted: true,
      languageCode: 'en'
    }
    this.dataStore.addUser(user);
  }

}
