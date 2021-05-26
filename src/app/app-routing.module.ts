import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { UserGuard } from './user.guard';
import { WritePostComponent } from './write-post/write-post.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignUPComponent, canActivate:[AuthGuard]},
  { path: 'signin', component: SignInComponent, canActivate:[AuthGuard]},
  { path: 'fpassword', component: ForgetPasswordComponent, canActivate:[AuthGuard]},
  { path:'wPost', component: WritePostComponent, canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
