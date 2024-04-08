import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { FormComponent } from './controls/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CalendarComponent,AppComponent,FormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Vanesa';
  user = undefined;
  data=[1,2,3,4,5,6]
}