import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import {RegistrationComponent} from "./modules/pages/registration/registration.component";
import {LoginComponent} from "./modules/pages/login/login.component";
import {SignOutComponent} from "./modules/pages/sign-out/sign-out.component";
import {LoginGuard} from "./guards/login.guard";
import { AllTendersComponent } from "./modules/hospital/all-tenders/all-tenders.component";
import { BloodBankGuard } from "./guards/BloodBankCenter.guard";
import { ScheduleAppointmentComponent } from "./modules/hospital/schedule-appointment/schedule-appointment.component";
import { PatientGuard } from "./guards/patient-guard.service";
import { MyAppointmentsComponent } from "./modules/hospital/my-appointments/my-appointments.component";
import {
  HospitalizeWithPreferenceComponent
} from "./modules/hospital/hospitalize-with-preference/hospitalize-with-preference.component";
import {PatientHealthCareComponent} from "./modules/patient-health/patient-health-care/patient-health-care.component";


const routes: Routes = [
  { path: 'sign-up',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  { path: 'registration',
    component: RegistrationComponent,
    canActivate: [LoginGuard]
  },
  { path: 'hospitalize-with-preference',
    component: HospitalizeWithPreferenceComponent,
    canActivate: [PatientGuard]
  },
  {path: '',
   component: HomeComponent
  },
  {path: 'sign-out',
   component:SignOutComponent,
    canActivate:[PatientGuard]
  },
  {
    path: 'my-appointments',
    component: MyAppointmentsComponent
  },
  {path: 'tenders',
  component:AllTendersComponent,
   canActivate:[BloodBankGuard]
 },
 {
   path: 'schedule-appointment',
   component: ScheduleAppointmentComponent,
   canActivate: [PatientGuard]
  },
  {
    path: 'your-health',
    component: PatientHealthCareComponent,
    canActivate: [PatientGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
