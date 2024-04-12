import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookeditComponent } from './bookedit/bookedit.component';

export const routes: Routes = [
    {path:"books",component:BookComponent},
    {path:"books/edit",component:BookeditComponent}
];
