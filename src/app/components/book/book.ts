import { Component, input } from '@angular/core';
import { BookType } from './book.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  public book = input.required<BookType>();

  alternarFavorito() {
    this.book().favorito = !this.book().favorito;
  }
}
