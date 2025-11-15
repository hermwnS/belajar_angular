import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './storage.html',
  styleUrl: './storage.css',
})
export class Storage implements OnInit {
  items: Item[] = [];
  newName: string = '';
  newQty: number = 0;
  totalItems: number = 0;

  constructor(private storageService: StorageService) {}
  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.items = this.storageService.getItems();
    this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  addItem() {
    const newItem: Item = {
      id: Date.now(),
      name: this.newName,
      quantity: this.newQty,
    };

    this.storageService.addItem(newItem);
    this.loadItems();
    this.newName = '';
    this.newQty = 0;
  }

  delete(id: number) {
    this.storageService.deleteItem(id);
    this.loadItems();
  }
}
