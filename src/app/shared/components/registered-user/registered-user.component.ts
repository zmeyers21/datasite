import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisteredUser } from 'src/app/core/models/registered-user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.scss']
})
export class RegisteredUserComponent implements OnInit {

  @Input() user: RegisteredUser;
  @Output() remove = new EventEmitter<number>();

  constructor(public userService: UserService) { }

  ngOnInit() { }

  details(id: string) {
    this.userService.changeUserContext('details');
    setTimeout(() => {
      this.userService.changeDetailsId(id);
    });
  }

}
