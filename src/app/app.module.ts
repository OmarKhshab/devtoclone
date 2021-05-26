import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarListComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { WritePostComponent } from './write-post/write-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarListComponent,
    HomeComponent,
    SignUPComponent,
    SignInComponent,
    ForgetPasswordComponent,
    FooterComponent,
    PostComponent,
    WritePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDsd_c2X47GVEFMy7jtgVYWYgzXOGRvQNM",
      authDomain: "egydev-e047a.firebaseapp.com",
      projectId: "egydev-e047a",
      storageBucket: "egydev-e047a.appspot.com",
      messagingSenderId: "934199077375",
      appId: "1:934199077375:web:54ad24ee8fb00848fc9fca",
      measurementId: "G-65J09LJ2KC"
    })
  ],
  providers: [FirebaseService , PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
