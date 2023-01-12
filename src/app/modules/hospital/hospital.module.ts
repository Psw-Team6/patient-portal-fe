import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { UpdateRoomComponent } from "./update-room/update-room.component";
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { ProfileComponent} from "./profile/profile.component";
import { LoginComponent } from '../pages/login/login.component';
import {PatientGuard} from "../../guards/patient-guard.service";
import { GeneralDoctorsAvailableComponent } from './general-doctors-available/general-doctors-available.component';
import { AllAllergensComponent } from './all-allergens/all-allergens.component';
import {MyAppointmentsComponent} from "./my-appointments/my-appointments.component";
import {AppointmentsPreviewComponent} from "./my-appointments/appointments-preview/appointments-preview.component";
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AllTendersComponent } from './all-tenders/all-tenders.component';
import { DetailsTenderComponentComponent } from './all-tenders/details-tender-component/details-tender-component.component';
import {HospitalizeWithPreferenceComponent} from "./hospitalize-with-preference/hospitalize-with-preference.component";
import {MatStepperModule} from "@angular/material/stepper";
import {MatListModule} from "@angular/material/list";
import { ScheduleAppointmentComponent } from "./schedule-appointment/schedule-appointment.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { AppointmentSuggestionsComponent} from "./appointment-suggestions/appointment-suggestions.component";
import {AllDoctorsComponent} from "./all-doctors/all-doctors.component";
import { CreatePatientHealthStateComponent } from './create-patient-health-state/create-patient-health-state.component';


const routes: Routes = [
  { path: 'profile',
    component: ProfileComponent,
    canActivate:[PatientGuard]
  },
  { path: 'hospitalize-with-preference',
    component: HospitalizeWithPreferenceComponent,
    canActivate:[PatientGuard]
  },
  { path: 'tenders',
  component: AllTendersComponent,
  canActivate:[PatientGuard]
},
];

@NgModule({
  declarations: [
    RoomsComponent,
    RoomDetailComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    CreateFeedbackComponent,
    ProfileComponent,
    LoginComponent,
    GeneralDoctorsAvailableComponent,
    AllAllergensComponent,
    MyAppointmentsComponent,
    AppointmentsPreviewComponent,
    AllTendersComponent,
    DetailsTenderComponentComponent,
    HospitalizeWithPreferenceComponent,
    ScheduleAppointmentComponent,
    AppointmentSuggestionsComponent,
    AllDoctorsComponent,
    CreatePatientHealthStateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatStepperModule,
    MatListModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    ],

  providers: [HttpClientModule],
  exports: [RouterModule, LoginComponent]
})
export class HospitalModule { }
