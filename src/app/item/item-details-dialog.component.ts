import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item-model/item.model';

@Component({
  selector: 'item-detail',
  templateUrl: './item-details-dialog.component.html'
})

export class ItemDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item, private itemService: ItemService) {

  }
}
