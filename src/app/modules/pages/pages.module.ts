import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule

  ]
})
export class PagesModule { }
