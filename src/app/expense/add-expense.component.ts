import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Category } from '../shared/models/category-model/category.model';
import { CategoryService } from '../shared/services/category.service';
import { ItemService } from '../shared/services/item.service';
import { Item } from '../shared/models/item-model/item.model';
import { Expense } from '../shared/models/expense-model/expense.model';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'add-expense',
    templateUrl: './add-expense.component.html',
    styleUrls: ['./add-expense.component.css']

})
export class AddExpenseComponent implements OnInit {
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onSaveExpense = new EventEmitter();
    selectedCat = null;
    selectedItem = null;
    categories: Category[];
    items: Item[];
    pageIndex: 0;
    pageSize: 0;
    expense = new Expense();
    constructor(private categoryService: CategoryService,
        private itemService: ItemService) {

    }
    ngOnInit() {
        this.getCategories(this.pageIndex, this.pageSize);
    }
    selectedCategory(categoryId) {
        console.log(categoryId);
        if (categoryId === 'undefined') {
            this.expense.itemId = undefined;
            this.expense.categoryId = undefined;
            console.log(categoryId);
        } else {
            this.itemService.getItemsByCategoryId(categoryId).subscribe(result => {
                this.expense.itemId = undefined;
                this.items = result;
            });
        }
    }
    onSave() {
        this.expense.createdDate = new Date();
        this.onSaveExpense.emit(this.expense);
    }

    getCategories(pageIndex, pageSize) {
        this.categoryService.getCategories(0, 0).subscribe(result => {
            this.categories = result.categories;
        });
    }
}
