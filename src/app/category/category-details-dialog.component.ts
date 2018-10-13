import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../shared/models/category-model/category.model';
import { CategoryService } from '../shared/services/category.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'category-details',
  templateUrl: './category-details-dialog.component.html'
})

export class CategoryDetailsDialogComponent {
  categoryDetail: Category;
  isSaved: false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Category, private categoryService: CategoryService) {
    this.categoryDetail = data;
  }

  onSave(isSaved: boolean) {
    if (isNullOrUndefined(this.categoryDetail.id) || this.categoryDetail.id === 0) {
      this.categoryService.saveCategories(this.categoryDetail).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    } else {
      this.categoryService.updateCategories(this.categoryDetail.id, this.categoryDetail).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    }
  }
}
