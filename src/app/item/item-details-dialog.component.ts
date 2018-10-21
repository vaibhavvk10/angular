import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item-model/item.model';

@Component({
  selector: 'item-details',
  templateUrl: './item-details-dialog.component.html',
  styleUrls: ['./item-details-dialog.component.css']
})

export class ItemDetailsDialogComponent {
  itemDetail: Item;
  isSaved: false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Item, private itemService: ItemService) {
    this.itemDetail = data;
  }

  onSave(isSaved: boolean) {
    if (isNullOrUndefined(this.itemDetail.id) || this.itemDetail.id === 0) {
      this.itemService.saveItems(this.itemDetail).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    } else {
      this.itemService.updateItems(this.itemDetail.id, this.itemDetail).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    }
  }
}
