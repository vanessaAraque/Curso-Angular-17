import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicePost } from '../service.post';
import { URLAPI } from '../app.config';

interface Request{

}

interface Response{


}

const postFactory = (path:string) =>{

  return (url:string, http:HttpClient)=>{
    return new ServicePost<Request,Response>(url,path,http)
  }
}

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  providers:[
    {
      provide:ServicePost<Request,Response>,
      useFactory:postFactory("/customer"),
      deps:[URLAPI,HttpClient]
    }
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  constructor(private readonly service:ServicePost<Request,Response>)
  {
    console.log(service)
  }
}
