import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../shared/models/user-model/user.model';
import { UserService } from '../shared/services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html'
})

export class DeleteUserComponent {
  private user: User[];
  userId: number;
  isSaved: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    this.userId = data;
  }

  public onDelete(isSaved: boolean) {
    if (!isNullOrUndefined(this.userId) || this.userId !== 0) {
      this.userService.deleteUsers(this.userId).subscribe(result => {
        if (result) {
          this.isSaved = result;
        }
      });
    }
  }
}
