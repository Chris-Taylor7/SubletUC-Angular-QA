import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewListingsRoutingModule } from './view-listings-routing.module';
import { ViewListingsComponent } from './view-listings/view-listings.component';
@NgModule({
  declarations: [ViewListingsComponent],
  imports: [
    CommonModule,
    ViewListingsRoutingModule
  ]
})
export class ViewListingsModule { }
