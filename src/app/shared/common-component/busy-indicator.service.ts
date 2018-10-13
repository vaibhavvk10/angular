import { Injectable } from '@angular/core';
import { BusyIndicator } from './busy-indicator';
import { Subject } from 'rxjs';

@Injectable()
export class BusyIndicatorService {
  private busyIndicatorSubject = new Subject<BusyIndicator>();
  busyIndicator = this.busyIndicatorSubject.asObservable();
  constructor() { }
  show() {
    this.busyIndicatorSubject.next(<BusyIndicator>{ show: true });
  }
  hide() {
    this.busyIndicatorSubject.next(<BusyIndicator>{ show: false });
  }
}
