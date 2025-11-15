import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.html',
  styleUrl: './storage.css',
})
export class Storage implements OnInit {
  items: Item[] = [];
  newName: string = '';
  newQty: number = 0;

  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    this.items = this.storageService.getItems();
  }

  addItem() {
    const newItem: Item = {
      id: Date.now(),
      name: this.newName,
      quantity: this.newQty,
    };

    this.storageService.addItem(newItem);
    this.items = this.storageService.getItems();
    this.newName = '';
    this.newQty = 0;
  }

  delete(id: number) {
    this.storageService.deleteItem(id);
    this.items = this.storageService.getItems();
  }
}
