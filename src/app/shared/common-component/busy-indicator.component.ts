import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusyIndicator } from './busy-indicator';
import { BusyIndicatorService } from './busy-indicator.service';

@Component({
  selector: 'busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.css']
})
export class BusyIndicatorComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;
  constructor(private busyIndicatorService: BusyIndicatorService, private zone: NgZone) {

  }

  ngOnInit() {
    this.zone.run(() => {
      this.subscription = this.busyIndicatorService.busyIndicator
        .subscribe((state: BusyIndicator) => {
          this.show = state.show;
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
