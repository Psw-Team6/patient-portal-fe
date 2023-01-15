import {UserToken} from "../model/UserToken";
import {TokenStorageService} from "../services/token-storage.service";
import {AppointmentClient, AppointmentResponse} from "../../../api/api-reference";
import {Component, OnInit} from "@angular/core";
import {CalendarEvent, CalendarView} from "angular-calendar";
import {addDays, subDays} from "date-fns";
import * as moment from "moment/moment";
import {HttpErrorResponse} from "@angular/common/http";
import {MatTabChangeEvent} from "@angular/material/tabs";
import { EventColor } from 'calendar-utils';
import { map } from "rxjs";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AppointmentsPreviewComponent} from "./appointments-preview/appointments-preview.component";
import { DataServiceService } from "../services/data-service.service";


const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#ffffff',
    secondary: '#ffffff',
  },
  green: {
    primary: "#e3bc08",
    secondary: "#FDF1BA",
    secondaryText:'#263238'
  },
  orange : {
    primary: '#ffffff',
    secondary: '#FDD0BA',
    secondaryText:'#263238'
  },
  pink : {
    primary: '#1ECBE1',
    secondary: '#1EE196',
    secondaryText:'#263238'
  },
  selected : {
    primary: '#ad2121',
    secondary: '#c3796f',
    secondaryText:'#263238'
  }
};


@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {
  appointments: AppointmentResponse[] = [];
  currentTabIndex = new Date().getDay() - 1;
  userToken:UserToken;
  viewDate: Date;
  appointmentCalender: CalendarEvent<{}>[] = [];
  events : CalendarEvent<{}>[]= [];
  dayStartHour = 6;
  dayEndHour = 22;
  hourSegmentHeight = 110;
  daysInWeek = 7;
  view: CalendarView = CalendarView.Week;
  viewDateEnd: Date;
  canClickMoreDetails:boolean = false
  monthView: boolean = false
  viewButton:string = "Month view"

  selectedEventApp: CalendarEvent<{ appointment: AppointmentResponse }> = {
    title: null as any,
    start: null as any,
    color: { ...colors['blue'] },
    end: null as any,
    meta: null as any,
  };
  constructor(private dialog : MatDialog,private dataService: DataServiceService,private readonly client: AppointmentClient, private  tokenStorageService:TokenStorageService, private readonly router: Router) {
    this.userToken = this.tokenStorageService.getUser();
    this.viewDate = new Date();
    this.viewDateEnd = addDays(this.viewDate, 6);
    this.dataService.getData().subscribe(data => {
      // @ts-ignore
      let apps = this.appointmentCalender.filter(e => {
        //@ts-ignore
        if(e.meta.appointment.id != data){
          return true
        }
      });
      this.events =  [...apps];
  })
  }

  ngOnInit(): void {
    this.getPatientAppointments();
  }
  private createAppointmentClient(appointment: AppointmentResponse):string {
    return (
      'Appointment'+ '\n'+
      'Start time: '+
      moment(appointment.duration?.from).format('h:mm A')+
      '\n' +
      'Finish time: '+
      moment(appointment.duration?.to).format('h:mm A')
    );
  }
  onEventClick(event: any): void {
    console.log(event)
    this.selectedEventApp = event.event;
    // @ts-ignore

    /*  this.selectedEventApp = event.event*/
      console.log(this.selectedEventApp)
      this.showAppointmentDetails();

    this.canClickMoreDetails = true

  }
  private showAppointmentDetails() {
    this.dialog.open(AppointmentsPreviewComponent, {
      width: '600px',
      height:'320px',
      data: { appointment: this.selectedEventApp.meta?.appointment }
    });
  }
  private createEvents() {
    this.events =  [...this.appointmentCalender];
    console.log(this.events);
  }
  monthShow() {
    this.monthView = !this.monthView;
    switch (this.viewButton) {
      case 'Month view':
        this.viewButton = 'Week view'
        break
      case 'Week view':
        this.viewButton = 'Month view'
        break
    }
  }
  async handlePrevious(): Promise<void> {
    this.viewDate = subDays(this.viewDate, 7);
    this.viewDateEnd = addDays(this.viewDate, 6);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  async handleCurrent(): Promise<void> {
    this.viewDate = new Date();
    this.viewDateEnd = addDays(this.viewDate, 6);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  async handleNext(): Promise<void> {
    this.viewDate = addDays(this.viewDate, 7);
    this.viewDateEnd = addDays(this.viewDate, 6);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  private readonly getPatientAppointments=()=> {
    this.client.getPatientAppointments(this.userToken.id).pipe(
      map((results: AppointmentResponse[]) => {
        return results.map((appointment: AppointmentResponse) => {
          return {
            title: this.createAppointmentClient(appointment),
            start: appointment.duration?.from,
            end: appointment.duration?.to,
            color: {...colors['green']},
            meta: {
              appointment,
              id: 2
            }
          };
        });
      })
    )
      .subscribe(
        //@ts-ignore
        (response: CalendarEvent<{ appointment: AppointmentResponse }>[]) => {
          //@ts-ignore
          this.appointmentCalender = response
          this.createEvents();
          console.log(this.appointmentCalender)
          // @ts-ignore
          console.log(this.appointmentCalender[0].meta.appointment.id)
        }, (error: HttpErrorResponse) => {
          console.log(error.message);
        })
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

  newAppointment() {
    this.router.navigate(['schedule-appointment'])
  }
}
