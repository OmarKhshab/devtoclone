
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public userStatus:boolean;

  constructor(private firebaselogin:FirebaseService){
    this.firebaselogin.isLoggedin.subscribe(logedIn => {
      if (localStorage.getItem('loggedIn') || !logedIn)
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
  }

  ngOnInit(): void {
  }
  @Output() sidenavToggle = new EventEmitter<void>();

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  public logout(){
    this.firebaselogin.signout();
  }
}
