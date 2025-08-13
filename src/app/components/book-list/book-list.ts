import { Component, OnInit } from '@angular/core';
import { books } from '../../mock-books';
import { BookType, LiteraryGenreType } from '../book/book.entity';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList implements OnInit {
  genres: LiteraryGenreType[] = [];
  booksByGenre: Map<string, BookType[]> = new Map();

  ngOnInit(): void {
    this.booksByGenre = new Map();

    books.forEach((book) => {
      const genreId = book.genero.id;

      if (!this.booksByGenre.has(genreId)) {
        this.booksByGenre.set(genreId, []);
      }

      this.booksByGenre.get(genreId)?.push(book);
    });

    this.genres = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.booksByGenre.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.booksByGenre.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.booksByGenre.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.booksByGenre.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.booksByGenre.get('tecnicos') ?? [],
      },
    ];
  }
}
