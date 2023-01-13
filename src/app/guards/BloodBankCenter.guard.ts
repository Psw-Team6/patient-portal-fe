import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {NgToastService} from "ng-angular-popup";
import { TokenStorageService } from '../modules/hospital/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BloodBankGuard implements CanActivate {
  constructor(private tokenStorageService:TokenStorageService,private router:Router,private toast:NgToastService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.tokenStorageService.isLoggedIn() && this.tokenStorageService.getUser().role === "BloodBankCenter"){
      return true
    }
    this.router.navigate(['']).then(()=>{
      this.toast.error({detail:"Error",summary:"Please sign in!",duration:5000});
    });
    return false;
  }

}