import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CreatePatientModel} from "../model/createPatient.model";
import {DoctorResponse} from "../../../api/api-reference";
import {CreateFeedbackComponent} from "../create-feedback/create-feedback.component";
import {MatDialog} from "@angular/material/dialog";
import {AppointmentSuggestionsComponent} from "../appointment-suggestions/appointment-suggestions.component";
import {Overlay} from "@angular/cdk/overlay";
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import * as moment from "moment/moment";
import {AppointmentResponseModel} from "../model/appointmentResponse.model";
import {TokenStorageService} from "../services/token-storage.service";
import {NgToastService} from "ng-angular-popup";



@Component({
  selector: 'app-hospitalize-with-preference',
  templateUrl: './hospitalize-with-preference.component.html',
  styleUrls: ['./hospitalize-with-preference.component.css']
})
export class HospitalizeWithPreferenceComponent implements OnInit {

   addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
    return date;
  }

  appointmentResponse: AppointmentResponseModel = new AppointmentResponseModel()
  today = new Date();
   tomorrow = this.addDays(new Date(), 2);
  later = this.addDays(this.today, 16)
  range = new FormGroup({
    start: new FormControl<Date>(this.tomorrow),
    end: new FormControl<Date>(this.later),
  });
  chosenClicked = false;
  firstClicked = false;
  doctor: DoctorResponse = new DoctorResponse();
  scrollStrategy: ScrollStrategy;

  constructor( private toast:NgToastService, private dialog: MatDialog,private tokenService: TokenStorageService, private overlay: Overlay, private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy =   this.sso.noop();
  }






  ngOnInit(): void {
  }

  openDialog(): void {
    if (this.appointmentResponse.doctorId == ''){
      this.toast.error({detail: 'Doctor must be selected!', summary: "!", duration: 5000})
      return;
    }
    this.appointmentResponse.duration.from = this.range.value.start;
    this.appointmentResponse.duration.to = this.range.value.end;
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
      const dialogRef = this.dialog.open(AppointmentSuggestionsComponent, {scrollStrategy: scrollStrategy,
        width: '400px',
        data: {
          doctorId: this.appointmentResponse.doctorId,
          patientId: this.tokenService.getUser().id,
          duration: this.appointmentResponse.duration,
          timeRangePriority: this.firstClicked

        }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.toast.error({detail: 'Try again', summary: "Appointment is not available anymore!", duration: 5000})
      } else if (result == 0) {
        this.toast.success({detail: 'Successful', summary: "Appointment is scheduled!", duration: 5000})
      } else if (result == 2) {
        this.toast.error({detail: 'Unavailable', summary: "!", duration: 5000})
      }
    });




  }



  onSelectingDoctor(value: string) {
    this.appointmentResponse.doctorId = value;
  }

}
