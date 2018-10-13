import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CategoryListComponent } from './category-list.component';
import { CategoryDetailsDialogComponent } from './category-details-dialog.component';
import { DeleteCategoryComponent } from './delete-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PagingComponent } from '../shared/common-component/paging.component';
import { OrderrByPipe } from '../shared/pipes/sorting.pipe';
import { SearchByPipe } from '../shared/pipes/searching.pipe';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule, CategoryRoutingModule, CommonModule, MatDialogModule, FormsModule, MatSlideToggleModule ],

  providers: [   ],

  declarations: [ CategoryListComponent, CategoryDetailsDialogComponent, DeleteCategoryComponent],

  entryComponents: [ CategoryDetailsDialogComponent, DeleteCategoryComponent ],

  schemas: [ NO_ERRORS_SCHEMA ]
})
export class CategoryModule { }
