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
import { MyAppointmentsComponent } from '../hospital/my-appointments/my-appointments.component';
import {MatTabsModule} from "@angular/material/tabs";
import { AppointmentsPreviewComponent } from '../hospital/my-appointments/appointments-preview/appointments-preview.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    SignOutComponent,
    DialogSignComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule
  ],
})
export class PagesModule { }
