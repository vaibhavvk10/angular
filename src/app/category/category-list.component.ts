import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category-model/category.model';
import { MatDialog } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { CategoryDetailsDialogComponent } from './category-details-dialog.component';
import { BusyIndicatorService } from '../shared/common-component/busy-indicator.service';
import { DeleteCategoryComponent } from './delete-category.component';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})

export class CategoryListComponent implements OnInit {
  categories: Category[];
  pageIndex = 1;
  pageSize = 10;
  pageCount: number[];
  categoriesCount = 0;
  isDesc = false;
  column = 'categoryName';
  direction: number;
  searchText = '';

  constructor(private categoryService: CategoryService, public dialog: MatDialog,
    private busyIndicatorService: BusyIndicatorService) {

  }

  ngOnInit() {
    this.loadCategories(this.pageIndex, this.pageSize);
  }

  public onEdit(category: Category): void {
    const dialogRef = this.dialog.open(CategoryDetailsDialogComponent, {
      height: '350px',
      width: '600px',
      hasBackdrop: false,
      data: !isNullOrUndefined(category) ? category : new Category(),
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCategories(this.pageIndex, this.pageSize);
      }
    });
  }

  public onDelete(id: number): void {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      height: '200px',
      width: '400px',
      data: id,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCategories(this.pageIndex, this.pageSize);
      }
    });
  }

  private loadCategories(pageIndex, pageSize): void {
    this.busyIndicatorService.show();
    this.categoryService.getCategories(pageIndex, pageSize).subscribe((result: any) => {
      this.categories = result.categories;
      this.categoriesCount = result.categoriesCount;
      this.busyIndicatorService.hide();
    });
  }

  public getPage(event) {
    this.pageIndex = this.pageIndex;
    this.loadCategories(event.pageIndex, this.pageSize);
  }

  public sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
