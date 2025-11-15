import { Component, signal } from '@angular/core';
import { Storage } from "./storage/storage";

@Component({
  selector: 'app-root',
  imports: [Storage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('belajar_angular');
}
