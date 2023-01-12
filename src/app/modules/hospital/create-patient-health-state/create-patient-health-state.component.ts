import { Component, OnInit } from '@angular/core';
import {
  BloodPressure,
  BloodSugarLevel, DateRange,
  PatientHealthStateClient,
  PatientHealthStateDto, Percentage
} from "../../../api/api-reference";
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";
import {PatientService} from "../services/patient.service";
import {Patient} from "../model/patient.model";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-create-patient-health-state',
  templateUrl: './create-patient-health-state.component.html',
  styleUrls: ['./create-patient-health-state.component.css']
})
export class CreatePatientHealthStateComponent implements OnInit {
  lowerPressure: number = 0;
  upperPressure: number = 0;
  sugarLevel: number = 0;
  weight: number = 0;
  from: Date = new Date();
  to: Date = new Date();
  patientId:string = "";
  patient:Patient = new Patient()
  loaded:boolean = false;
  bodyFatPercent: number = 0;

  constructor(private tokenStorageService: TokenStorageService,private router: Router
              , private patientService:PatientService,private alert: NgToastService,private readonly patientHealthStateClient:PatientHealthStateClient) {
    this.patientId = tokenStorageService.getUser().id
  }

  ngOnInit(): void {
    this.patientService.getPatient(this.patientId).subscribe({
     next: value => {
       this.patient = value
       console.log(this.patient)
       this.loaded = true
     }
    })
  }
  createRecord() {
    let newRecord:PatientHealthStateDto = new PatientHealthStateDto({
      bloodSugarLevel: new BloodSugarLevel({
        sugarLevel: this.sugarLevel
      }),
      bloodPressure: new BloodPressure({
        lowerPressure: this.lowerPressure,
        upperPressure: this.upperPressure
      }),
      menstrualCycle: new DateRange({
        from: this.from,
        to: this.to
      }),
      bodyFatPercent: new Percentage({
        value: this.bodyFatPercent
      }),
      weight: this.weight,
      submissionDate: new Date(),
      patientId: this.patientId
    })
    this.patientHealthStateClient.createPatientHealthState(newRecord).subscribe(
      {
        next: response => {
          console.log(response)
          this.alert.success({detail: 'Success!', summary: "You are successfully submit form!", duration: 5000})
          this.router.navigate(['home'])
        },
        error: message => {
          this.alert.error({detail: 'Error!', summary: message.Error, duration: 5000})
        }

      }
      )
  }
}
