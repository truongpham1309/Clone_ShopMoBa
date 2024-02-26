import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    const toastr = inject(ToastrService);
    const token = sessionStorage.getItem("token");

    if(token) {
        return true;
    }
    toastr.warning("Ban chua dang nhap!")
    router.navigateByUrl("/login");
    return false;
};
