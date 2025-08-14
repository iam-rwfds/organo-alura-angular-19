export type LiteraryGenreType = {
  id: string;
  value: string;
  livros: BookType[];
};

export type BookType = {
  [key in 'titulo' | 'autoria' | 'imagemUrl']: string;
} & {
  favorito: boolean;
  genero: LiteraryGenreType;
};
