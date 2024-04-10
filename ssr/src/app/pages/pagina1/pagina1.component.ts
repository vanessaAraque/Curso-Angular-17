import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';


interface Post{
  id:string,
  title: string,
  view: number
}

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {

  posts = signal<Post[]>([])

  constructor(private readonly http:HttpClient)
  {
    this.getdata();
  }
  getdata(){
    this.http.get<Post[]>("https://laughing-pancake-jxqgjxvg6jp3rgr-3000.app.github.dev/posts")
    .subscribe(post=>this.posts.set(post))
  }
}
