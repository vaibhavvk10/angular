import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CategoryService } from '../shared/services/category.service';
import { isNullOrUndefined } from 'util';
import { Category } from '../shared/models/category-model/category.model';

@Component({
  selector: 'dalete-category',
  templateUrl: './delete-category.component.html'
})

export class DeleteCategoryComponent  {
  private category: Category[];
  categoryId: number;
  isSaved = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) {
    this.categoryId = data;
  }

  public onDelete(isSaved: boolean): void {
    if (isNullOrUndefined(this.categoryId) || this.categoryId !== 0) {
      this.categoryService.deleteCategories(this.categoryId).subscribe(result => {
        if (result) {
          isSaved = result;
        }
      });
    }
  }
}
