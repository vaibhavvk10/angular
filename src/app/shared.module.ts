import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderrByPipe } from './shared/pipes/sorting.pipe';
import { SearchByPipe } from './shared/pipes/searching.pipe';
import { PagingComponent } from './shared/common-component/paging.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    // dep modules
    CommonModule
  ],
  declarations: [
    OrderrByPipe, SearchByPipe, PagingComponent
  ],
  exports: [
    OrderrByPipe, SearchByPipe, PagingComponent
  ]
})

export class SharedModule {}
