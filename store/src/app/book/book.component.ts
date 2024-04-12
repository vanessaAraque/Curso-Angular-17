import { Component, effect, inject } from '@angular/core';
import { BooksStore } from '../book.store';
import { getState } from '@ngrx/signals';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { set } from 'idb-keyval';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  readonly store=inject(BooksStore)
  constructor(){
    effect(()=>{
      const state = getState(this.store);
      console.log(state)
    })
  }
  async handlerClick(ev:Event){
    ev.stopPropagation();
    await this.store.loadAll();
    const data ={
      books:this.store.books(),
      isLoading: this.store.isLoading(),
      filter : this.store.filter()
    }

    await set('books', data)
  }
}