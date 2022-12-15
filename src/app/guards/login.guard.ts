import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../modules/hospital/services/token-storage.service";
import {NgToastService} from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private tokenStorageService:TokenStorageService,private router:Router,private toast:NgToastService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   /*  if(!this.tokenStorageService.isLoggedIn()){
      return true
    }
    this.router.navigate(['home']).then(()=>{
      this.toast.error({detail:"Error",summary:"You have already signed in!",duration:5000});
    });
    return false; */
    if(this.tokenStorageService.isLoggedIn() && this.tokenStorageService.getUser().role === 'Patient'){
      this.router.navigate(['home']).then(()=>{
        this.toast.error({detail:"Error",summary:"Please sign out!",duration:5000});
      });
      return false
    }
    if(this.tokenStorageService.isLoggedIn() && this.tokenStorageService.getUser().role === 'BloodBankCenter'){
      this.router.navigate(['bloodBank']).then(()=>{
        this.toast.error({detail:"Error",summary:"Please sign out!",duration:5000});
      });
      return false
    }
    return true
  }

}
