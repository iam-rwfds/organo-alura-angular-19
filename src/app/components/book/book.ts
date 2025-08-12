import { Component, input } from '@angular/core';
import { BookType } from './book.entity';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  public livro = input.required<BookType>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
