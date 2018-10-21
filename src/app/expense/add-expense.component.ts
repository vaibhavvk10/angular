import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-expense',
    templateUrl: './add-expense.component.html'
})
export class AddExpenseComponent {
    @Output() onSaveExpense = new EventEmitter();

    onSave() {
        this.onSaveExpense.emit(true);
    }
}