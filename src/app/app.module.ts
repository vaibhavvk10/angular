import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { UserListComponent } from './user/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsDialogComponent } from './user/user-details-dialog.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeleteUserComponent } from './user/delete-user.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OrderrByPipe } from './shared/pipes/sorting.pipe';
import { SearchByPipe } from './shared/pipes/searching.pipe';
import { PagingComponent } from './shared/common-component/paging.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BusyIndicatorComponent } from './shared/common-component/busy-indicator.component';
import { BusyIndicatorService } from './shared/common-component/busy-indicator.service';
import { CategoryService } from './shared/services/category.service';
import { CategoryListComponent } from './category/category-list.component';

@NgModule({
  declarations: [
    AppComponent, UserListComponent, UserDetailsDialogComponent, DeleteUserComponent, OrderrByPipe, SearchByPipe,
    PagingComponent, BusyIndicatorComponent, CategoryListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MatDialogModule, BrowserAnimationsModule, FormsModule,
    MatSlideToggleModule, MatProgressSpinnerModule
  ],
  providers: [UserService, BusyIndicatorService, CategoryService],
  bootstrap: [AppComponent],
  entryComponents: [UserDetailsDialogComponent, DeleteUserComponent]
})
export class AppModule { }
