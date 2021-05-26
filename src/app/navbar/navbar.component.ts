import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarListComponent implements OnInit{
  public userStatus:boolean;

  constructor(private firebaselogin:FirebaseService){

  }

  ngOnInit(): void {
    this.firebaselogin.isLoggedin.subscribe(logedIn => {
      this.firebaselogin.isLoggedin.subscribe(logedIn => {
        if (localStorage.getItem('loggedIn'))
        {
          this.userStatus = true;
          return;
        }
        if (logedIn)
        {
          this.userStatus = true;
          return;
        }
        else {
          this.userStatus = false;
          return;
        }
      });
    });
  }
  @Output() closeSidenav = new EventEmitter<void>();

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
  }
  public logout(){
    this.firebaselogin.signout();
  }
}
