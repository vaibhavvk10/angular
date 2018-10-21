import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserDetailsDialogComponent } from './user-details-dialog.component';
import { DeleteUserComponent } from './delete-user.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule, UserRoutingModule, CommonModule, MatDialogModule, FormsModule, MatSlideToggleModule ],

  providers: [],

  declarations: [ UserListComponent, UserDetailsDialogComponent, DeleteUserComponent],

  entryComponents: [ UserDetailsDialogComponent, DeleteUserComponent ],

  schemas: [ NO_ERRORS_SCHEMA ]
})
export class UserModule { }
