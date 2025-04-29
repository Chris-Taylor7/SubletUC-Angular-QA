import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports: [CheckboxModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() forLabel: string = '';
  @Input() binary: boolean = true;
  @Input() checked: boolean = false;
  
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<any>();

  onValueChange(event: any) {
    this.checked = event.checked;
    this.checkedChange.emit(this.checked);
    this.onChange.emit(event);
  }
}