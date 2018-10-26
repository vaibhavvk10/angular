import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list.component';
import { DeleteItemComponent } from './delete-item.component';
import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '../shared.module';
import { ItemDetailsDialogComponent } from './item-details-dialog.component';

@NgModule({
  imports: [ SharedModule, ItemRoutingModule, CommonModule, MatDialogModule, FormsModule, MatSlideToggleModule ],

  providers: [   ],

  declarations: [ ItemListComponent, ItemDetailsDialogComponent, DeleteItemComponent ],

  entryComponents: [ ItemDetailsDialogComponent, DeleteItemComponent ],

  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ItemModule { }
