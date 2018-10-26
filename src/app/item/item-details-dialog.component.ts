import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item-model/item.model';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category-model/category.model';

@Component({
  selector: 'item-details',
  templateUrl: './item-details-dialog.component.html',
  styleUrls: ['./item-details-dialog.component.css']
})

export class ItemDetailsDialogComponent {
  itemDetail: Item;
  isSaved: false;
  categories: Category[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Item, private itemService: ItemService,
    private categoryService: CategoryService) {
    this.itemDetail = data;
    this.categoryService.getCategories(1, 0).subscribe(result => {
      this.categories = result.categories;
    });
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
