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
import { AllTendersComponent } from './all-tenders/all-tenders.component';
import { DetailsTenderComponentComponent } from './all-tenders/details-tender-component/details-tender-component.component';

const routes: Routes = [
  { path: 'profile',
    component: ProfileComponent,
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
    AllTendersComponent,
    DetailsTenderComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, LoginComponent]
})
export class HospitalModule { }
