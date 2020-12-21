import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { mergeMap, tap } from 'rxjs/operators';
import { User } from '../core/models/user.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import userColumnns from '../core/models/user-columns.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = userColumnns;
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private userService: UserService) {
    this.renderData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  renderData() {
    if (!this.userService.dataLoaded()) {
      this.loadData();
    } else {
      this.setData();
    }
  }
  setData() {
    this.dataSource = new MatTableDataSource(JSON.parse(sessionStorage.getItem('registeredUsers')));
  }
  loadData() {
    this.userService.getRegisteredUsers().pipe(
      tap((users) => this.userService.setRegisteredUsers(JSON.stringify(users))),
      mergeMap(() => this.userService.getUnregisteredUsers()),
      tap((users) => this.userService.setUnregisteredUsers(JSON.stringify(users))),
      mergeMap(() => this.userService.getProjectMemberships()),
      tap((memberships => this.userService.setMemberships(JSON.stringify(memberships)))),
      tap(() => sessionStorage.setItem('dataLoaded', '1')),
      tap(() => this.setData())
    ).subscribe();
  }
}
