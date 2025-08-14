import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, BookList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('organo');
}
