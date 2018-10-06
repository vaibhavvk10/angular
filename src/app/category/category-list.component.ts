import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
})

export class CategoryListComponent implements OnInit {
  category: Category[];
  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {

  }
}
