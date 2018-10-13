import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'delete-item',
  templateUrl: './delete-item.component.html'
})

export class DeleteItemComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private itemService: ItemService) {

  }
}
