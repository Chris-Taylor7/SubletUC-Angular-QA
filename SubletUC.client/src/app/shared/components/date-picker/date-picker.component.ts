import { Component, Input } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-date-picker',
  imports: [DatePickerModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  constructor(){}
  @Input() dateFormat: string | undefined; //only for Availability
}