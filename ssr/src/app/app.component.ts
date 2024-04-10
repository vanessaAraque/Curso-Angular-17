import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Vanesa';
  
  constructor(){
    // No lo ejecutes en el servidor
    afterNextRender(()=>{
      const result = document.querySelectorAll('*')
      console.log(result)
    })
  }
  handlerClick(ev:Event)
  {
    console.log("click")
  }
}
