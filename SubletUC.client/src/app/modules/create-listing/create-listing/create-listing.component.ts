import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { Gender } from '../../../data/enum/gender';
import { ListingService } from '../../../services/listing-service';
@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss'],
  providers: [MessageService],
  standalone: false,
})
export class CreateListingComponent implements OnInit {


  listing: any = {
    address: '',
    rent: 0,
    availability: '',
    bedrooms: 0,
    bathrooms: 0,
    description: '',
    utilitiesIncludedInRent: false,
    averageutilities: 0,
    roommates: [],
    sharedRoom: false,
    sharedRoommates: 0,
    catsAndDogsAllowed: false,
    washerDryer: false,
    offStreetParking: false,
    driveway: false,
    distanceFromCampus: 0,
    notes: '',
    photo: null,
    userId: 1
  };

  genderOptions = [
    { label: 'Male', value: Gender.Male },
    { label: 'Female', value: Gender.Female },
    { label: 'Non-Binary', value: Gender.NonBinary },
    { label: 'Other', value: Gender.Other }
  ];

  constructor(private messageService: MessageService,   private readonly _listingService: ListingService
  ){}//, private listingService: ListingService) {
  

  ngOnInit(): void {
    this.addRoommate();
  }

  addRoommate(): void {
    this.listing.roommates.push({
      year: new Date().getFullYear(),
      Gender: Gender.Male
    });
  }

  removeRoommate(index: number): void {
    if (this.listing.roommates.length > 1) {
      this.listing.roommates.splice(index, 1);
      this.showToast('success', 'Roommate removed');
    } else {
      this.showToast('warn', 'Warning', 'At least one roommate is required');
    }
  }

  onSharedRoomChange(): void {
    if (!this.listing.sharedRoom) {
      this.listing.sharedRoommates = 0;
    }
  }

  onPhotoUpload(event: any): void {
    const file = event.files[0];
    if (file) {
      this.listing.photo = file;
      this.showToast('success', 'Photo selected');
    }
  }

  onSubmit(form: any): void {
    console.log("button works")
    if (form.invalid) {
      console.log("form error \n ")
      console.log(form)
      this.showToast('error', 'Error', 'Please fill in all required fields');
      return;
    }
    console.log(form);
    debugger
    this._listingService.createOrUpdateListing(this.listing).subscribe({
      next: () => {
        this.showToast('success', 'Success', 'Listing submitted successfully');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error submitting listing:', err);
        this.showToast('error', 'Error', 'Failed to submit listing');
      }
    });
  }
  
  private resetForm(): void {
    this.listing = {
      listingId: 0,
      address: '',
      rent: 0,
      availability: '',
      bedrooms: 1,
      bathrooms: 1,
      description: '',
      utilitiesIncludedInRent: false,
      averageutilities: 0,
      roommates: [],
      sharedRoom: false,
      sharedRoommates: 0,
      catsAndDogsAllowed: false,
      washerDryer: false,
      offStreetParking: false,
      driveway: false,
      distanceFromCampus: 0,
      notes: '',
      photo: null,
      userId: 1,
      deleted: false
    };
    this.addRoommate();
  }

  private showToast(severity: string, summary: string, detail: string = ''): void {
    this.messageService.add({ severity, summary, detail });
  }
}