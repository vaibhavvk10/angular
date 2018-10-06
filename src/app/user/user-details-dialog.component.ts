import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'user-details',
  templateUrl: './user-details-dialog.component.html'
})
export class UserDetailsDialogComponent {
  userDetail: User;
  isSaved: false;
  url: any;
  selecetdFile : File;
  imagePreview: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private userService: UserService) {
    this.url = 'data:image/jpeg;base64,' + data.userImage;
    this.userDetail = data;
  }

  onSave(isSaved: boolean) {
    if (isNullOrUndefined(this.userDetail.id) || this.userDetail.id === 0) {
      this.userService.saveUser(this.userDetail).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    } else {
      this.userService.updateUser(this.userDetail.id, this.userDetail).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    }
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result;
        this.userDetail.userImage = this.url;
        this.userDetail.userImage =  reader.result.split(',')[1];
      };
    }
  }
}
