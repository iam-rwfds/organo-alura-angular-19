import { Component, input } from '@angular/core';
import { Book } from '../book/book';
import { LiteraryGenreType } from '../book/book.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-genre',
  imports: [Book, CommonModule],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.scss',
})
export class LiteraryGenre {
  genre = input.required<LiteraryGenreType>();
}
