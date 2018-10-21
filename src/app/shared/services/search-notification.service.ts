import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class SearchNotificationService {
    message: string;
    constructor() { }

    messageSubject$ = new Subject<string>();

    public getMessage(dd: string): void {
        this.messageSubject$.next(dd);
    }

    public setMessage(dd: string) {
        return new Promise((resolve, reject) => {
            this.getMessage(dd);
            resolve();
        });
    }
}