/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Gender } from '../../../data/enum/gender';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ɵBrowserAnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss'],
  providers: [MessageService, ɵBrowserAnimationBuilder], // Required for toast messages
  standalone: false
})
export class CreateListingComponent implements OnInit {
  listingForm!: FormGroup;
  genderOptions = [
    { label: 'Male', value: Gender.Male },
    { label: 'Female', value: Gender.Female },
    { label: 'Non-Binary', value: Gender.NonBinary },
    { label: 'Other', value: Gender.Other }
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.addRoommate();
  }

  initForm(): void {
    this.listingForm = this.fb.group({
      address: ['', Validators.required],
      rent: [0, [Validators.required, Validators.min(1)]],
      availability: ['', Validators.required],
      bedrooms: [1, [Validators.required, Validators.min(1)]],
      bathrooms: [1, [Validators.required, Validators.min(1)]],
      description: [''],
      utilitiesIncludedInRent: [false],
      averageutilities: [0],
      roommates: this.fb.array([]),
      sharedRoom: [false],
      sharedRoommates: [0],
      catsAndDogsAllowed: [false],
      washerDryer: [false],
      offStreetParking: [false],
      driveway: [false],
      distanceFromCampus: [0],
      notes: [''],
      photo: [null],
      userId: [1]
    });
  }

  get roommates(): FormArray {
    return this.listingForm.get('roommates') as FormArray;
  }

  addRoommate(): void {
    this.roommates.push(
      this.fb.group({
        year: [new Date().getFullYear()],
        Gender: [Gender.Male]
      })
    );
  }

  removeRoommate(index: number): void {
    if (this.roommates.length > 1) {
      this.roommates.removeAt(index);
      this.showToast('success', 'Roommate removed');
    } else {
      this.showToast('warn', 'Warning', 'At least one roommate is required');
    }
  }

  onSharedRoomChange(): void {
    if (!this.listingForm.get('sharedRoom')?.value) {
      this.listingForm.get('sharedRoommates')?.setValue(0);
    }
  }

  onPhotoUpload(event: any): void {
    const file = event.files[0];
    if (file) {
      this.listingForm.patchValue({ photo: file });
      this.showToast('success', 'Photo selected');
    }
  }

  onSubmit(): void {
    if (this.listingForm.invalid) {
      this.showToast('error', 'Error', 'Please fill in all required fields');
      return;
    }
    console.log(this.listingForm);
    debugger;
    const formValue = this.listingForm.value;
    console.log('Form submitted:', formValue);

    debugger;
    
    this.showToast('success', 'Success', 'Listing submitted successfully');
    this.listingForm.reset();
    this.addRoommate(); // Reset with one roommate
  }

  private showToast(severity: string, summary: string, detail: string = ''): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}