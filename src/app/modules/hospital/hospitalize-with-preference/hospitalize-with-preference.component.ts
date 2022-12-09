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



@Component({
  selector: 'app-hospitalize-with-preference',
  templateUrl: './hospitalize-with-preference.component.html',
  styleUrls: ['./hospitalize-with-preference.component.css']
})
export class HospitalizeWithPreferenceComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  chosenClicked = false;
  firstClicked = false;
  doctor: DoctorResponse = new DoctorResponse();
  scrollStrategy: ScrollStrategy;

  constructor(private dialog: MatDialog, private overlay: Overlay, private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy =   this.sso.noop();
  }






  ngOnInit(): void {
  }

  openDialog(): void {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(AppointmentSuggestionsComponent, {scrollStrategy: this.scrollStrategy,
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  onSelectingDoctor(value: string) {
    this.doctor.id = value;
  }

}
