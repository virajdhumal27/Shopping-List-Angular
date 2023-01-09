import { Component } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
  items: Item[];

  constructor() {
    this.items = []
  }

  deleteItem(item: Item) {
    console.log(item);
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  
  addItem(item: Item): void {
    console.log(item);
    this.items.push(item);
  }
}
