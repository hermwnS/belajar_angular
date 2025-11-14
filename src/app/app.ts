import { Component, signal } from '@angular/core';
import { Injectable } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

@Injectable({
  providedIn: 'root',
})
export class AppService {
  
}

export class App {
  protected readonly title = signal('belajar_angular');
}
