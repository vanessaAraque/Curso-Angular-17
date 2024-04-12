import { Inject, Injectable, inject } from '@angular/core';
import { URLAPI } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  a=0;
  //urlApi=''
  constructor(
     @Inject(URLAPI) urlApi:String
  ) { 
    console.log(urlApi)
    //this.writer();
  }
  /*writer(){
    this.urlApi=inject(URLAPI)
    console.log("service")
    console.log(this.urlApi)
  }*/
}
