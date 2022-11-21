import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {NgToastService} from "ng-angular-popup";
import {TokenStorageService} from "../modules/hospital/services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {

  constructor(private tokenStorageService:TokenStorageService,private router:Router,private toast:NgToastService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.tokenStorageService.isLoggedIn() && this.tokenStorageService.getUser().role === "Patient"){
      return true
    }
    this.router.navigate(['']).then(()=>{
      this.toast.error({detail:"Error",summary:"Please sign in!",duration:10000});
    });
    return false;
  }

}
