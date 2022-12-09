import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import { SignOutComponent } from './sign-out/sign-out.component';
import { DialogSignComponent } from './sign-out/dialog-sign/dialog-sign.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    SignOutComponent,
    DialogSignComponent,
    ScheduleAppointmentComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    MatStepperModule

  ]
})
export class PagesModule { }
