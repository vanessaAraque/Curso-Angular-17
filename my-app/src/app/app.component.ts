import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { FormComponent } from './controls/form/form.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CalendarComponent,AppComponent,FormComponent,CounterComponent, TimerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Vanesa';
  user = undefined;
  data=[1,2,3,4,5,6]
}