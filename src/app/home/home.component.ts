import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //       this.screenWidth = window.innerWidth;
  //       if (this.screenWidth < 700)
  //       {
  //         this.show = 'yes';
  //       }
  //       else{
  //         this.show = 'no';
  //       }
  //       console.log( this.screenWidth);
  // }
}
