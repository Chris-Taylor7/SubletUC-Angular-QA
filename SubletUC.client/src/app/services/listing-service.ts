import { HttpClient, HttpClientModule } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Listing } from "../data/listing";

@Injectable({
    providedIn: 'root'
  })
  export class ListingService {
    private http = inject(HttpClient)
    private apiUrl = 'api/listing';
  
    constructor() { }
  
    getListings(): Observable<Listing[]> {
      return this.http.get<Listing[]>(this.apiUrl);
    }
  
    getListingById(listingId: number): Observable<Listing> {
      return this.http.get<Listing>(`${this.apiUrl}/${listingId}`);
    }
  
    createOrUpdateListing(listing: Listing): Observable<Listing> {
      return this.http.post<Listing>(this.apiUrl, listing);
    }
  
    deleteListing(listingId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${listingId}`);
    }
  }