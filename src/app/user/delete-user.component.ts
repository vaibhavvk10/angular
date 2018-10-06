import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html'
})

export class DeleteUserComponent {
  private user: User[];
  isSaved = false;
  userId: number;
  constructor(private userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userId = data;
  }

  onDelete(isSaved: boolean) {
    if (!isNullOrUndefined(this.userId) || this.userId !== 0) {
      this.userService.deleteUser(this.userId).subscribe(result => {
        if (result) {
          this.isSaved = result;
        }
      });
    }
  }

}
