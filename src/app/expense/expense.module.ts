import { NgModule } from '@angular/core';
import { ExpenseRoutingModule } from './expense-routing.module';
import { AddExpenseComponent } from './add-expense.component';
import { ExpenseListComponent } from './expense-list.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../shared/common-component/menu.component';

@NgModule({
    imports: [ ExpenseRoutingModule, SharedModule, CommonModule, FormsModule  ],

    providers: [],

    declarations: [ ExpenseListComponent, AddExpenseComponent],

    entryComponents: [],

    exports: []
})

export class ExpenseModule { }
