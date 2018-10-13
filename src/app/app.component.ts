import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BusyIndicatorService } from './shared/common-component/busy-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manage user';
}
