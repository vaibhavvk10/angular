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
    selectedSearch = 'byMonth';
    expenses: Expense[];
    pageIndex = 1;
    pageSize = 7;
    expensesCount = 0;
    selectedExpenseToBeDelete = [];
    selectedExpenseToBeUpdate: Expense;
    totalExpenses = 0;
    month: number;
    year: number;
    fromDate: Date;
    toDate: Date;
    constructor(private expenseService: ExpenseService, private busyIndicatorService: BusyIndicatorService) { }

    ngOnInit(): void {
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
        this.loadExpenses(this.pageIndex, this.pageSize, this.month, this.year, this.fromDate, this.toDate);
    }
    private loadExpenses(pageIndex, pageSize, month, year, fromDate, toDate) {
        this.busyIndicatorService.show();
        this.expenseService.getExpenses(pageIndex, pageSize, month, year, fromDate, toDate).subscribe((result: any) => {
            this.expenses = result.expenses;
            this.expensesCount = result.expensesCount;
            this.totalExpenses = result.total;
            this.busyIndicatorService.hide();
        });
    }
    onSaveExpense(event) {
        // post service // get response true/ false // if true // loadExpense
        this.expenseService.saveExpenses(event).subscribe((result) => {
            if (result) {
                this.loadExpenses(this.pageIndex, this.pageSize, this.month, this.year, this.fromDate, this.toDate);
            }
        });
    }
    onSelectedSearch() {
        if (this.selectedSearch === 'byMonth' &&
            !isNullOrUndefined(this.month) && !isNullOrUndefined(this.year)) {
                this.fromDate = null;
                this.toDate = null;
            this.loadExpenses(this.pageIndex, this.pageSize, this.month, this.year, this.fromDate, this.toDate);
        }
        if (this.selectedSearch === 'byFromToDate' &&
            !isNullOrUndefined(this.fromDate) && !isNullOrUndefined(this.toDate)) {
                this.month = null;
                this.year = null;
            this.loadExpenses(this.pageIndex, this.pageSize, this.month, this.year, this.fromDate, this.toDate);
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
            const exp = new Expense();
            exp.expenseId = expense.expenseId;
            exp.categoryId = expense.categoryId;
            exp.itemId = expense.itemId;
            exp.amount = expense.amount;
            exp.description = expense.description;
            exp.createdDate = expense.createdDate;
            exp.updatedDate = expense.updatedDate;
            exp.expenseDateTime = expense.expenseDateTime;
            this.selectedExpenseToBeDelete.push(exp);
        }
    }
    onDelete() {
        if (this.selectedExpenseToBeDelete.length > 0) {
            // call service to delete
            this.expenseService.deleteExpenses(this.selectedExpenseToBeDelete).subscribe(result => {
                if (result) {
                    this.loadExpenses(this.pageIndex, this.pageSize, this.month, this.year, this.fromDate, this.toDate);
                    this.selectedExpenseToBeDelete = [];
                }
            });
        }
    }
    public getPage(event) {
        this.pageIndex = event.pageIndex;
        this.loadExpenses(event.pageIndex, this.pageSize, this.month, this.year, this.fromDate, this.toDate);
    }
}
