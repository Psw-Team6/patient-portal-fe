import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/cdk/stepper";
import {FormBuilder, Validators} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";
import {
  Appointment, AppointmentRequest, AppointmentState, AppointmentType,
  DateRange,
  Doctor,
  DoctorClient,
  DoctorResponse,
  HolidayClient,
  ScheduleClient
} from "../../../api/api-reference";
import {NgToastService} from "ng-angular-popup";
import { Moment } from 'moment';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from "moment/moment";



@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {


  stepperOrientation: Observable<StepperOrientation> | undefined;
  selectedValue: any;
  specialisation : string[] =['all','General','Dermatology','Surgeon']
  selectedName= "";
  selectedDoctorId = ""
  doctors: DoctorResponse[] = []
  patientId = "";
  isLinear = true;
  generated = false;
  stardDate: Date = new Date();
  valid = false;
  generatedSpans : DateRange[] = []
  endDate: any;
  notFound= false;
  selectedDateRange : DateRange = new DateRange()
  bla: true | undefined;
  constructor(private _formBuilder: FormBuilder,breakpointObserver: BreakpointObserver,private readonly client: DoctorClient,
              private readonly  ngToast:NgToastService,private scheduleClient: ScheduleClient, private tokenStorageService: TokenStorageService,
              private readonly router1:Router, private readonly router:ActivatedRoute) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      this.patientId = this.router1.getCurrentNavigation()?.extras?.state?.['data']!

  }


  ngOnInit(): void {
    this.client.getAllDoctors().subscribe({
      next: response=>{
        this.doctors = response
      }
    })
    this.patientId = this.tokenStorageService.getUser().id;
  }

  filterSpecialisation(specialisation:String) {
    // @ts-ignore
    this.client.getBySpecialisation(specialisation).subscribe({
      next: res=>{
        this.doctors = res
      }
    })
  }
  next(){
    console.log(this.stardDate)
    console.log(this.endDate)
  }
  secondFormControl(){
    if(this.selectedDoctorId != ""){
      return true
    }
    return false
  }


  doct() {
    console.log(this.stardDate)
    if(this.validate()){
      this.generate()
    }
  }
  convertminutes(mins:number){
    // @ts-ignore
    if(mins == 0){
      return "00"
    }
    return mins.toString()
  }
  convertMonth(month:number){
    return month +1
  }

  validate(){
    if(this.selectedDoctorId != "" && this.stardDate != undefined && this.endDate!= undefined){
      if(this.checkDates()){
        this.valid = true
        this.generate()
        return true
      }
      return false;
    }
    else {
      this.valid = false
      return false
    } 
  }


  generate() {
      var dateRange = new DateRange()
      dateRange.from = this.stardDate
      dateRange.to = this.endDate
      this.client.getFreeTimes(this.selectedDoctorId,dateRange).subscribe({
        next: res =>{
          this.generatedSpans = res
          this.valid=true
          this.notFound = false
        },
        error: message =>{
          this.ngToast.error({detail: 'Error!',summary:"No free appointments!",duration:5000})
          this.valid =false
          this.notFound = true
          this.expandRange(dateRange)
          console.log(this.generatedSpans)
        }
      })


  }

  expandRange(range:DateRange){
    let endDateExpanded = moment(range.to).add(1, "day");
    let startDateExpanded = moment(range.from).add(-1, "day");
    var newDateRange = new DateRange()
    newDateRange.from = startDateExpanded.toDate()
    newDateRange.to = endDateExpanded.toDate()
    console.log(newDateRange)
    console.log(range)
    this.client.getFreeTimes(this.selectedDoctorId,newDateRange).subscribe({
      next: res =>{
        this.generatedSpans = res
        console.log(res)
      },
      error: message =>{
        this.ngToast.error({detail: 'Error!',summary:"No free appointments!",duration:5000})
        this.expandRange(newDateRange)
      }

    })
  }

  allSelected() {
    if(this.selectedDoctorId != "" && this.stardDate != undefined && this.endDate!= undefined){
      return true
    }
    return false
  }

  checkFirstDate() {
    if(this.endDate != undefined){
      if(this.stardDate >= this.endDate){
        this.ngToast.error({detail: 'Error!',summary:"Invalid Dates!",duration:5000})
        this.valid = false
      }
    }
    else{
      this.validate()
    }
  }
  checkSecondDate() {
    if(this.stardDate != undefined){
      if(this.stardDate >= this.endDate){
        this.ngToast.error({detail: 'Error!',summary:"Invalid Dates!",duration:5000})
        this.valid = false
      }
    }
    else{
      this.validate()
    }

  }
  checkDates(){
    if(this.stardDate >= this.endDate){
      this.ngToast.error({detail: 'Error!',summary:"Invalid Dates!",duration:5000})
      this.valid = false
      return false
    }
    return true
  }

  selectAppointment(span: DateRange) {
    this.selectedDateRange = span
    console.log( this.selectedDateRange)

  }

  scheduleAppointment() {
    let app: AppointmentRequest = new AppointmentRequest(
      {
        appointmentState: AppointmentState.Pending,
        appointmentType: AppointmentType.Examination,
        doctorId: this.selectedDoctorId,
        patientId: this.patientId,
        duration: this.selectedDateRange,
        emergent: false
      });
    console.log("OBjekat koji saljem: ", app)
    this.scheduleClient.scheduleAppointment(app).subscribe({
      next: res=>{
        this.ngToast.success({detail: 'Success!',summary:"Scheduled appointment!",duration:5000})
        this.router1.navigateByUrl('/my-appointments');

      }
    })
  }
  cancelForward() {
    this.router1.navigateByUrl('/my-appointment');
  }
}

