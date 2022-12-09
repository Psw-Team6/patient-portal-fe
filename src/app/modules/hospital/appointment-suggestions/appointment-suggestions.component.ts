import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {DoctorResponse} from "../../../api/api-reference";
import {AppointmentSuggestionModel} from "../model/appointment-suggestion.model";
import * as moment from "moment";

@Component({
  selector: 'app-appointment-suggestions',
  templateUrl: './appointment-suggestions.component.html',
  styleUrls: ['./appointment-suggestions.component.css']
})
export class AppointmentSuggestionsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppointmentSuggestionsComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  appointmentSuggestions:AppointmentSuggestionModel[]=[]

  ngOnInit(): void {
    this.appointmentSuggestions.push(new AppointmentSuggestionModel());
    this.appointmentSuggestions.push(new AppointmentSuggestionModel());
    this.appointmentSuggestions.push(new AppointmentSuggestionModel());
    this.appointmentSuggestions.push(new AppointmentSuggestionModel());
  }

  getDateFormat(date: Date) {
    return moment(date).format("MMMM Do, YYYY");
  }

}
