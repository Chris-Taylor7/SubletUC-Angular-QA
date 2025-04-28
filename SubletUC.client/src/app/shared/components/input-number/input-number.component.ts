import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-input-number',
  imports: [InputNumberModule, DatePickerModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {

  constructor(){}

  // Dynamic inputs so to clean up the HTML side of things
  @Input() mode: string | undefined; // currency, distance, number, etc.
  @Input() placeholder: string | undefined; //placeholder inside the input area
  @Input() label: string | undefined; //text displayed above input area
  @Input() forLabel: string | undefined //"for" attribute in the <label></label> tags
  //@Input() dateFormat: string | undefined; //only for Availability
  @Input() currency: string | undefined; //USD
  //after input text
  @Input() suffix: string | undefined;

  hello = 'hello'
}
