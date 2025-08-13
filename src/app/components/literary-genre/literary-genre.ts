import { Component } from '@angular/core';
import { Book } from '../book/book';
import { books } from '../../mock-books';

@Component({
  selector: 'app-literary-genre',
  imports: [Book],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.scss',
})
export class LiteraryGenre {
  book = books[0];
}
