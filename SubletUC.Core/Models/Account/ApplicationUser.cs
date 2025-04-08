using Microsoft.AspNetCore.Identity;
using SubletUC.Server.Models;

namespace SubletUC.Core.Models.Account
{
    public class ApplicationUser : IdentityUser
    {
        public int UserId { get; set; }
        public string? FullName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
        //TODO: Implement with Login Service
        // public bool IsLockedOut => LockoutEnabled && LockoutEnd >= DateTimeOffset.UtcNow;
        public string? CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public ICollection<IdentityUserRole<string>> Roles { get; } = [];
        public ICollection<Listing>? Listings { get; set; }
        public ICollection<Listing>? Bookmarked { get; set; }
    }
}
