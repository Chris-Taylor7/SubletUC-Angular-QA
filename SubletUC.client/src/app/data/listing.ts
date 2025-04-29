import { Roommate } from "./enum/roommate";

export interface Listing {
    listingId: number
    address: string,
    rent: number,
    availability: string,
    bedrooms: number,
    bathrooms: number,
    description: string,
    utilitiesIncludedInRent: boolean,
    averageutilities: number,
    roommates: Roommate[],
    sharedRoom: boolean,
    sharedRoommates: number,
    catsAndDogsAllowed: boolean,
    washerDryer: boolean,
    offStreetParking: boolean,
    driveway: boolean,
    distanceFromCampus: number, //walking distance
    notes: string, //additional notes worth mentioning
    photo?: File,
    deleted?: boolean,
    userId: number, //use as foreign key (one user => many listings)
}