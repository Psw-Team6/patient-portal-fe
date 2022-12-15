import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {DoctorResponse} from "../../../api/api-reference";
import {AppointmentSuggestionModel} from "../model/appointment-suggestion.model";
import * as moment from "moment";
import {CreatePatientModel} from "../model/createPatient.model";
import {AppointmentService} from "../services/appointment.service";
import {AppointmentResponseModel} from "../model/appointmentResponse.model";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-appointment-suggestions',
  templateUrl: './appointment-suggestions.component.html',
  styleUrls: ['./appointment-suggestions.component.css']
})
export class AppointmentSuggestionsComponent implements OnInit {

  constructor(public tokenStorageService: TokenStorageService,public appointmentService: AppointmentService,public dialogRef: MatDialogRef<AppointmentSuggestionsComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  appointmentResponseModel: AppointmentResponseModel =  new AppointmentResponseModel();
  appointmentSuggestions:AppointmentSuggestionModel[]=[]

  ngOnInit(): void {
    this.appointmentResponseModel.doctorId = this.data.doctorId;
    this.appointmentResponseModel.patientId = this.data.patientId;
    this.appointmentResponseModel.duration = this.data.duration;
      this.appointmentService.getAppointmentSuggestions(this.data.timeRangePriority, this.appointmentResponseModel).subscribe(
        res => {
          this.appointmentSuggestions = res;
        });

  }

  getDateFormat(date: Date | null | undefined) {
    return moment(date).format("MMMM Do, YYYY");
  }

  getHourFormat(date: Date | null | undefined) {
    return moment(date).format("h:mm a")
  }

  createAppointment(appointment: any){
    try {
      this.appointmentResponseModel.patientId = this.tokenStorageService.getUser().id;
      this.appointmentResponseModel.doctorId = appointment.doctorId;
      this.appointmentResponseModel.duration = appointment.duration;
      console.log(this.appointmentResponseModel);
      this.appointmentService.createAppointment(this.appointmentResponseModel).subscribe(res => {
        this.dialogRef.close(0);
      });
    } catch(error) {
      this.dialogRef.close(1);
    }
  }

}
