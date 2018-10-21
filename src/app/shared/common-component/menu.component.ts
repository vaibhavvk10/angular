import { Component } from '@angular/core';
import { SearchNotificationService } from '../services/search-notification.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
    constructor(private messageService: SearchNotificationService) {}
    onTextChange(event){
      this.messageService.setMessage(event.target.value);
    }
   
}