import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  public userStatus: boolean
  constructor(private firebaselogin: FirebaseService , public router:Router){
    this.firebaselogin.isLoggedin.subscribe(logedIn => {
      this.userStatus = logedIn;
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('loggedIn'))
      {
        return true;
      }
      else {
        this.router.navigate(['signin']);
        return false;
      }
  }
  
}
