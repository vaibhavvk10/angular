import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class BusyIndicatorService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  display(value: boolean) {
    this.status.next(value);
  }
}
