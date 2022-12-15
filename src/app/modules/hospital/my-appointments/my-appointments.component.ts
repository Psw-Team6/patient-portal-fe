import { Component, OnInit } from '@angular/core';
import {UserToken} from "../model/UserToken";
import {TokenStorageService} from "../services/token-storage.service";
import {AppointmentService} from "../services/appointment.service";
import {MyAppointments} from "../model/my-appointments.model";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {AppointmentClient, AppointmentResponse} from "../../../api/api-reference";



@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {
  appointments: AppointmentResponse[] = [];
  currentTabIndex = new Date().getDay() - 1;
  userToken:UserToken;
  constructor(private readonly client: AppointmentClient, private  tokenStorageService:TokenStorageService) {
    this.userToken = this.tokenStorageService.getUser();
  }


  ngOnInit(): void {
    this.getPatientAppointments();
  }


  private readonly getPatientAppointments=()=> {
    this.client.getPatientAppointments(this.userToken.id).subscribe(
      {
        next: response => {
          console.log(response);
          this.appointments = response;
        }
      }
    )
  }

  filterAppointmentByMonday() {
    return  this.appointments.filter(a => a.duration?.from?.getDay() == 1).sort((n1,n2)=> n1.duration?.from?.getTime()! - n2.duration?.from?.getTime()!);
  }
  filterAppointmentByTuesday() {
    return this.appointments.filter(a => a.duration?.from?.getDay() == 2).sort((n1,n2)=> n1.duration?.from?.getTime()! - n2.duration?.from?.getTime()!);
  }
  filterAppointmentByWednesday() {
    return this.appointments.filter(a => a.duration?.from?.getDay() == 3).sort((n1,n2)=> n1.duration?.from?.getTime()! - n2.duration?.from?.getTime()!);
  }
  filterAppointmentByThursday() {
    return this.appointments.filter(a => a.duration?.from?.getDay() == 4).sort((n1,n2)=> n1.duration?.from?.getTime()! - n2.duration?.from?.getTime()!);
  }
  filterAppointmentByFriday() {
    return this.appointments.filter(a => a.duration?.from?.getDay() == 5).sort((n1,n2)=> n1.duration?.from?.getTime()! - n2.duration?.from?.getTime()!);
  }
  filterAppointmentBySaturday() {
    return this.appointments.filter(a => a.duration?.from?.getDay() == 6).sort((n1,n2)=> n1.duration?.from?.getTime()! - n2.duration?.from?.getTime()!);
  }
  filterAppointmentBySunday() {
    return this.appointments.filter(a => a.duration?.from?.getDay() == 0).sort((n1,n2)=> n1.duration?.from?.getTime()! - n2.duration?.from?.getTime()!);
  }

  getSelectedIndex(): number {
    return this.currentTabIndex;
  }
  onTabChange(event: MatTabChangeEvent) {
    this.currentTabIndex = event.index;
  }
  onDelete(){
    this.getPatientAppointments();
  }
}
