import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseData } from '../models/expense-model/expense-data.model';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense-model/expense.model';

@Injectable()
export class ExpenseService {
    constructor(private http: HttpClient) {

    }

    public getExpenses(index: number, pageSize: number): Observable<ExpenseData> {
        return this.http.get('http://localhost:61677/api/Expense?index=' + index + '&pageSize=' + pageSize)
            .pipe(map((res: any) => {
                return <ExpenseData>res;
            }));
    }

    public saveExpenses(expense: Expense): Observable<boolean> {
        return this.http.post('http://localhost:61677/api/Expense/', expense).pipe(map((res: any) => {
            return <boolean>res;
        }));
    }

    public updateExpenses(id: number, expense: Expense): Observable<boolean> {
        return this.http.put('http://localhost:61677/api/Expense/' + id, expense).pipe(map((res: any) => {
            return <boolean>res;
        }));
    }

    public deleteExpenses(id: number): Observable<boolean> {
        return this.http.delete('http://localhost:61677/api/Expense/' + id).pipe(map((res: any) => {
            return <boolean>res;
        }));
    }
}
