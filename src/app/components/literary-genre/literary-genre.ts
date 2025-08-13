import { Component, input } from '@angular/core';
import { Book } from '../book/book';
import { LiteraryGenreType } from '../book/book.entity';

@Component({
  selector: 'app-literary-genre',
  imports: [Book],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.scss',
})
export class LiteraryGenre {
  genre = input.required<LiteraryGenreType>();
}
