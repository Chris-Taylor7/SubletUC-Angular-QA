import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingRoutingModule } from './create-listing-routing.module';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
@NgModule({
  declarations: [CreateListingComponent],
  imports: [
    CommonModule,
    CreateListingRoutingModule,
    FileUploadModule,
    CheckboxModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    HttpClientModule,
    DatePickerModule,
    SelectModule

  ]
})
export class CreateListingModule { }
