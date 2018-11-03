import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ExpenseRoutingModule } from './expense-routing.module';
import { AddExpenseComponent } from './add-expense.component';
import { ExpenseListComponent } from './expense-list.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ ExpenseRoutingModule, SharedModule, CommonModule, FormsModule ],

    providers: [],

    declarations: [ ExpenseListComponent, AddExpenseComponent],

    entryComponents: [],

    exports: [],

    schemas: [ NO_ERRORS_SCHEMA ]
})

export class ExpenseModule { }
