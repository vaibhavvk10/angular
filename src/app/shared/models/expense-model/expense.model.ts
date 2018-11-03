import { Category } from '../category-model/category.model';
import { Item } from '../item-model/item.model';

export class Expense {
    expenseId: number;
    amount: number;
    description: string;
    expenseDateTime: Date;
    categoryId: number;
    itemId: number;
    createdDate: Date;
    updatedDate: Date;
    category: Category;
    item: Item;
}
