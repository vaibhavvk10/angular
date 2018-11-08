import { Component, OnInit } from '@angular/core';
import { Expense } from '../shared/models/expense-model/expense.model';
import { ExpenseService } from '../shared/services/expense.service';
import { isNullOrUndefined } from 'util';
import { BusyIndicatorService } from '../shared/common-component/busy-indicator.service';

@Component({
    selector: 'expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})

export class ExpenseListComponent implements OnInit {
    expenses: Expense[];
    pageIndex = 1;
    pageSize = 7;
    expensesCount = 0;
    selectedExpenseToBeDelete = [];
    selectedExpenseToBeUpdate: Expense;
    totalExpenses = 0;
    constructor(private expenseService: ExpenseService,
        private busyIndicatorService: BusyIndicatorService) {

    }

    ngOnInit(): void {
        this.loadExpenses(this.pageIndex, this.pageSize);
    }


    private loadExpenses(pageIndex, pageSize) {
        this.busyIndicatorService.show();
        this.expenseService.getExpenses(pageIndex, pageSize).subscribe((result: any) => {
            this.expenses = result.expenses;
            this.expensesCount = result.expensesCount;
            this.calculateTotalExpense();
            this.busyIndicatorService.hide();
        });
    }
    onSaveExpense(event) {
        // post service // get response true/ false // if true // loadExpense
        this.expenseService.saveExpenses(event).subscribe((result) => {
            if (result) {
                // event = result;
                this.loadExpenses(this.pageIndex, this.pageSize);
            }
        });
    }
    calculateTotalExpense() {
        if (!isNullOrUndefined(this.expenses)) {
            let total = 0;
            this.expenses.forEach(x => {
                total = total + x.amount;
            });
            this.totalExpenses = total;
        }
    }
    onSelectedExpense(expense) {
        this.selectedExpenseToBeUpdate = expense;
    }
    onChecked(expense, event) {
        if (!event.target.checked) {
            const index = this.selectedExpenseToBeDelete.findIndex(x => x.id = expense.id);
            this.selectedExpenseToBeDelete.splice(index, 1);
        } else {
            expense.checked = event.target.checked;
            this.selectedExpenseToBeDelete.push(expense);
        }
    }

    onDelete() {
        if (this.selectedExpenseToBeDelete.length > 0) {
            // call service to delete
            this.expenseService.deleteExpenses(this.selectedExpenseToBeDelete).subscribe(result => {
                if (result) {
                    this.loadExpenses(this.pageIndex, this.pageSize);
                    this.selectedExpenseToBeDelete = [];
                }
            });
        }
    }
    public getPage(event) {
        this.pageIndex = event.pageIndex;
        this.loadExpenses(event.pageIndex, this.pageSize);
    }
}
