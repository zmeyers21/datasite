import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../core/services/data-store.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  trackByFn = (i, user) => user.id;
  @Output() remove = new EventEmitter<number>();

  context: string;

  constructor(public dataStore: DataStoreService,
              public userService: UserService) { }

  ngOnInit() {
    this.subscription = new Subscription();
    this.subscription.add(
      this.userService.userContext.subscribe(context => {
        this.switchContext(context);
      })
    );
  }

  switchContext(context: string) {
    this.context = context;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
