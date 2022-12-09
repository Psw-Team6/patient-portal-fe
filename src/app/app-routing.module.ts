import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";

import {RegistrationComponent} from "./modules/pages/registration/registration.component";
import {LoginComponent} from "./modules/pages/login/login.component";
import {SignOutComponent} from "./modules/pages/sign-out/sign-out.component";
import {PatientGuard} from "./guards/patient-guard.service";
import {LoginGuard} from "./guards/login.guard";
import { ScheduleAppointmentComponent } from "./modules/pages/schedule-appointment/schedule-appointment.component";


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
   component:SignOutComponent,
    canActivate:[PatientGuard]
  },
  { path: 'schedule-appointment',
  component: ScheduleAppointmentComponent,
  canActivate: [PatientGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
