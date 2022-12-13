import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import {RegistrationComponent} from "./modules/pages/registration/registration.component";
import {LoginComponent} from "./modules/pages/login/login.component";
import {SignOutComponent} from "./modules/pages/sign-out/sign-out.component";
import {LoginGuard} from "./guards/login.guard";
import {MyAppointmentsComponent} from "./modules/hospital/my-appointments/my-appointments.component";

const routes: Routes = [
  { path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  { path: 'registration',
    component: RegistrationComponent,
    canActivate: [LoginGuard]
  },
  {path: 'home',
   component: HomeComponent
  },
  {path: 'sign-out',
   component:SignOutComponent
  },
  {
    path: 'my-appointments',
    component: MyAppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
