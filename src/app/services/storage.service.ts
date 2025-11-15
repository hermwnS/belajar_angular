import { Injectable } from "@angular/core";
import { Item } from "../model/item";

@Injectable({
  providedIn: "root",
})
export class StorageService {
    private key = 'items';

    constructor() { }

    getItems(): Item[] {
        return JSON.parse(localStorage.getItem(this.key) || '[]');
    }

    saveItems(items: Item[]) {
        localStorage.setItem(this.key, JSON.stringify(items));
    }

    addItem(item: Item) {
        const items = this.getItems();
        items.push(item);
        this.saveItems(items);
    }

    deleteItem(id: number) {
        const items = this.getItems().filter(i=> i.id !== id);
        this.saveItems(items);
    }
}