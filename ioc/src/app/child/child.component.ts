import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  providers:[{
    provide:ServiceService, useFactory:(http:HttpClient)=>{
      return new ServiceService("https://laughing-pancake-jxqgjxvg6jp3rgr-8080.app.github.dev/")
    },
    deps:[HttpClient]
  }],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  constructor(private readonly service:ServiceService)
  {
    console.log(service)
    service.a=88;
  }
}
