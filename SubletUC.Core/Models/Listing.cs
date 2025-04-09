namespace SubletUC.Server.Models
{
    public class Listing
    {
        public int ListingId { get; set; }
        public string? Address { get; set; }
        public decimal Rent { get; set; }
        public string? Availability { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public string? Description { get; set; }
        public bool UtilitiesIncludedInRent { get; set; }
        public decimal AverageUtilities { get; set; }
        public bool SharedRoom { get; set; }
        public int SharedRoommates { get; set; }
        public bool CatsAndDogsAllowed { get; set; }
        public bool WasherDryer { get; set; }
        public bool OffStreetParking { get; set; }
        public bool Driveway { get; set; }

        public decimal DistanceFromCampus { get; set; }

        public string? Notes { get; set; }

        public byte[]? Photo { get; set; }
        // Navigation property for related Roommates
        public ICollection<Roommate>? Roommates { get; set; }
        public bool Deleted { get; set; }
        public int UserId { get; set; }
    }
}
