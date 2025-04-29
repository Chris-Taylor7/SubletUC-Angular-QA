import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingRoutingModule } from './create-listing-routing.module';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { DatePickerComponent } from "../../shared/components/date-picker/date-picker.component";
import { InputNumberComponent } from "../../shared/components/input-number/input-number.component";
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox/checkbox.component';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [CreateListingComponent],
  imports: [
    CommonModule,
    CreateListingRoutingModule,
    FileUploadModule,
    CheckboxModule,
    InputNumberModule,
    CalendarModule,
    SelectModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    DatePickerModule,
    SelectModule,
    DatePickerComponent,
    InputNumberComponent,
    CheckboxComponent,
    InputTextModule 
]
})
export class CreateListingModule { }
