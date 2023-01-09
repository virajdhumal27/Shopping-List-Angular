import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  idCounter: number;
  title!: string;
  quantity!: number;
  @Output() itemAdd: EventEmitter<Item> = new EventEmitter();

  constructor() {
    this.idCounter = 0;
  }

  onSubmit(): void {
    this.idCounter++;
    const item: Item = {
      id:this.idCounter,
      title: this.title,
      quantity: Number(this.quantity)
    }

    this.itemAdd.emit(item);
  }
}
