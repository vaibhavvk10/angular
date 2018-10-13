import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item-model/item.model';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html'
})

export class ItemListComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  items: Item[];
  itemsCount = 0;
  constructor(private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.loaditems(this.pageIndex, this.pageSize);
  }

  private loaditems(pageIndex, pageSize): void {
    this.itemService.getItems(pageIndex, pageSize).subscribe((result: any) => {
      this.items = result.items;
      this.itemsCount = result.itemsCount;
    })
  }
}
