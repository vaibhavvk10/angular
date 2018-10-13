import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserDetailsDialogComponent } from './user-details-dialog.component';
import { DeleteUserComponent } from './delete-user.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PagingComponent } from '../shared/common-component/paging.component';
import { OrderrByPipe } from '../shared/pipes/sorting.pipe';
import { SearchByPipe } from '../shared/pipes/searching.pipe';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule, UserRoutingModule, CommonModule, MatDialogModule, FormsModule, MatSlideToggleModule ],

  providers: [  ],

  declarations: [ UserListComponent, UserDetailsDialogComponent, DeleteUserComponent],

  entryComponents: [ UserDetailsDialogComponent, DeleteUserComponent ],

  schemas: [ NO_ERRORS_SCHEMA ]
})
export class UserModule { }
