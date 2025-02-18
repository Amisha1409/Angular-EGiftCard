import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GiftCardsComponent } from './component/gift-cards/gift-cards.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gift-cards',component:GiftCardsComponent},
  {path:'about',component:AboutComponent},

  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},


  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},

  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},

  {path:'forgotPassword',component:ForgotPasswordComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
