import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { OrderrByPipe } from './shared/pipes/sorting.pipe';
import { SearchByPipe } from './shared/pipes/searching.pipe';
import { PagingComponent } from './shared/common-component/paging.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/common-component/menu.component';
import { SearchNotificationService } from './shared/services/search-notification.service';

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
  ],
  providers: []
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SearchNotificationService]
    };
  }
}
