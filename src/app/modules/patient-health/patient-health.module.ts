import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHealthCareComponent } from './patient-health-care/patient-health-care.component';
import { NgChartsModule} from 'ng2-charts';
import {PatientClient, PatientHealthStateClient} from "../../api/api-reference";
import {MaterialModule} from "../../material/material.module";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    PatientHealthCareComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MaterialModule,
    MatTabsModule
  ],
  providers:[
    PatientHealthStateClient,PatientClient
  ]
})
export class PatientHealthModule { }
