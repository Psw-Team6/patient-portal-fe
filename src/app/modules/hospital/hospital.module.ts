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
import { HospitalizeWithPreferenceComponent } from './hospitalize-with-preference/hospitalize-with-preference.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import {MatRadioModule} from "@angular/material/radio";
import { AppointmentSuggestionsComponent } from './appointment-suggestions/appointment-suggestions.component';

const routes: Routes = [
  { path: 'profile',
    component: ProfileComponent,
    canActivate:[PatientGuard]
  },
  { path: 'hospitalize-with-preference',
    component: HospitalizeWithPreferenceComponent,
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
    HospitalizeWithPreferenceComponent,
    AllDoctorsComponent,
    AllDoctorsComponent,
    AppointmentSuggestionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatRadioModule
  ],
  exports: [RouterModule, LoginComponent]
})
export class HospitalModule { }
