import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../shared/services/item.service';
import { isNullOrUndefined } from 'util';
import { Item } from '../shared/models/item-model/item.model';

@Component({
  selector: 'delete-item',
  templateUrl: './delete-item.component.html'
})

export class DeleteItemComponent {
  private item: Item[];
  itemId: number;
  isSaved = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private itemService: ItemService) {
    this.itemId = data;
  }

  public onDelete(isSaved: boolean): void {
    if (isNullOrUndefined(this.itemId) || this.itemId !== 0) {
      this.itemService.deleteItems(this.itemId).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    }
  }
}
