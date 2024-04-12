import {patchState, signalStore, withMethods, withState} from '@ngrx/signals'
import { BookService } from './book.service';
import { inject } from '@angular/core';
import {Book} from './book'

type BooksState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, bookService = inject(BookService)) => ({
    /* ... */
    // 👇 Defining a method to load all books.
    async loadAll(): Promise<void> {
      patchState(store, { isLoading: true });

      const books = await bookService.getAll();
      patchState(store, { books, isLoading: false });
    },
  }))
);