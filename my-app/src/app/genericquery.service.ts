import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericqueryService {

  constructor( private http:HttpClient)
   {
     
   }

   getAll<T>():Promise<T>{
    return lastValueFrom(this.http.get<T>("https://laughing-pancake-jxqgjxvg6jp3rgr-3000.app.github.dev/posts"))
   }
}
