﻿// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

namespace SubletUC.Core.Services.Account
{
    public interface IUserIdAccessor
    {
        string? GetCurrentUserId();
    }
}
