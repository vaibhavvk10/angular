import { Component, OnInit } from '@angular/core';
import { BusyIndicatorService } from './shared/common-component/busy-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Manage user';
  showLoader: boolean;

  constructor(
    private busyIndicatorService: BusyIndicatorService) {
  }

  ngOnInit() {
    this.busyIndicatorService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
