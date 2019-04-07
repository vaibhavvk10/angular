import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item-model/item.model';
import { MatDialog } from '@angular/material';
import { ItemDetailsDialogComponent } from './item-details-dialog.component';
import { isNullOrUndefined } from 'util';
import { DeleteItemComponent } from './delete-item.component';
import { BusyIndicatorService } from '../shared/common-component/busy-indicator.service';
import { SearchNotificationService } from '../shared/services/search-notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html'
})

export class ItemListComponent implements OnInit, OnDestroy {
  items: Item[];
  pageIndex = 1;
  pageSize = 5;
  pageCount: number[];
  isDesc = false;
  column: 'itemName';
  direction: number;
  searchText = '';
  itemsCount = 0;
  subscription: Subscription;

  constructor(private itemService: ItemService, public dialog: MatDialog,
    private busyIndicatorService: BusyIndicatorService, private messageService: SearchNotificationService) {
    this.messageService.messageSubject$.subscribe(v => {
      this.searchText = v;
    });
  }
  ngOnInit(): void {
    this.loadItems(this.pageIndex, this.pageSize);
  }
  public onEdit(item: Item): void {
    const dialogRef = this.dialog.open(ItemDetailsDialogComponent, {
      height: '360px',
      width: '510px',
      hasBackdrop: false,
      data: !isNullOrUndefined(item) ? item : new Item(),
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadItems(this.pageIndex, this.pageSize);
      }
    });
  }
  public onDelete(id: number): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      height: '200px',
      width: '400px',
      data: id,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadItems(this.pageIndex, this.pageSize);
      }
    });
  }
  private loadItems(pageIndex, pageSize): void {
    this.busyIndicatorService.show();
    this.itemService.getItems(pageIndex, pageSize).subscribe((result: any) => {
      this.items = result.items;
      this.itemsCount = result.itemsCount;
      this.busyIndicatorService.hide();
    });
  }
  public getPage(event) {
    this.pageIndex = event.pageIndex;
    this.loadItems(event.pageIndex, this.pageSize);
  }
  public sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if (!isNullOrUndefined(this.subscription)) {
      this.subscription.unsubscribe();
    }
  }
}
