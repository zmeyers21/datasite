import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisteredUser } from 'src/app/core/models/registered-user.model';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { UserService } from 'src/app/core/services/user.service';
import { mergeMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  user: RegisteredUser;

  constructor(public userService: UserService,
              public dataStore: DataStoreService) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.subscription.add(
      this.userService.detailsId.subscribe(id => {
        this.dataStore.registeredUsers$.pipe(
          take(1),
          tap((users) => this.user = users.find(u => u.id === id))
        ).subscribe();
      })
    )
  }

  async removeUser() {
    await this.dataStore.removeRegisteredUser(this.user.id);
    this.userService.changeUserContext(null);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
