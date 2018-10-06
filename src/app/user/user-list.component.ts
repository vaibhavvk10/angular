import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { UserDetailsDialogComponent } from './user-details-dialog.component';
import { MatDialog } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { DeleteUserComponent } from './delete-user.component';
import { BusyIndicatorService } from '../shared/common-component/busy-indicator.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
  users: User[];
  isDesc = false;
  column = 'firstName';
  direction: number;
  searchText = '';
  pageCount: number[];
  pageIndex = 1;
  pageSize = 10;
  usersCount = 0;
  constructor(private userService: UserService, public dialog: MatDialog,
    private busyIndicatorService: BusyIndicatorService) {

  }

  ngOnInit() {
    this.loadUsers(this.pageIndex, this.pageSize);
  }

  public onEdit(user: User): void {
    const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
      height: '480px',
      width: '600px',
      hasBackdrop: false,
      data: !isNullOrUndefined(user) ? user : new User(),
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers(this.pageIndex, this.pageSize);
      }
    });
  }

  public onDelete(id: number): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      height: '200px',
      width: '400px',
      data: id,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers(this.pageIndex, this.pageSize);
      }
    });
  }

  private loadUsers(pageIndex, pageSize): void {
    this.busyIndicatorService.display(true);
    this.userService.getUsers(pageIndex, pageSize).subscribe((result: any) => {
      this.users = result.users;
      this.usersCount = result.usersCount;
      this.busyIndicatorService.display(false);
    });
  }

  public getPage(event) {
    this.pageIndex = this.pageIndex;
    this.loadUsers(event.pageIndex, this.pageSize);
  }
  public sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
