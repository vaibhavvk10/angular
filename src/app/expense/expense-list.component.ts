import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'expense-list',
    templateUrl: './expense-list.component.html'
})

export class ExpenseListComponent implements OnInit {
    constructor() {

    }
    
    ngOnInit() {

    }

    onSaveExpense(event) {
        console.log(event);
    }
}
