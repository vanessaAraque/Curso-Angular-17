import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getAll():Promise<Book[]>{
    return Promise.resolve<Book[]>([
      {},
      {}
    ])
  }
}