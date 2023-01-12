import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './modules/toolbar/toolbar.component';
import {ApplicationUserClient, DoctorClient, PatientHealthStateClient, ScheduleClient} from "./api/api-reference";
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {NgToastModule} from "ng-angular-popup";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import {PatientHealthModule} from "./modules/patient-health/patient-health.module";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    NgToastModule,
    PatientHealthModule
  ],
  providers: [ApplicationUserClient,
              DoctorClient,
              ScheduleClient,
             authInterceptorProviders,PatientHealthStateClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
