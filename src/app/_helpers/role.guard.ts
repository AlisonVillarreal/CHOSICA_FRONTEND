import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
      private accountService: AccountService, 
      private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.accountService.tokenValue()){
      this.accountService.logout();
      this.router.navigate(['/login']);
      return false;
    }
      let role = next.data['role'] as string;
    if(this.accountService.hasRole(role)){
      return true;
    }
    return false;
  }
  
}