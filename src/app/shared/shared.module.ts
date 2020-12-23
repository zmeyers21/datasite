import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredUserComponent } from './components/registered-user/registered-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatButtonModule, MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [RegisteredUserComponent, UserDetailsComponent, AddUserComponent],
  exports: [RegisteredUserComponent, UserDetailsComponent, AddUserComponent]
})
export class SharedModule { }
