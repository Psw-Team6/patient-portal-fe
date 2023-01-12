import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from "moment";
import {MyAppointments} from "../../model/my-appointments.model";
import {AppointmentService} from "../../services/appointment.service";
import {UserToken} from "../../model/UserToken";
import {Router} from "@angular/router";
import {AppointmentClient, AppointmentResponse} from "../../../../api/api-reference";
import {MatDialog} from "@angular/material/dialog";
import {TokenStorageService} from "../../services/token-storage.service";
import {Patient} from "../../model/patient.model";
import {MaliciousPatient} from "../../model/malicious-patient.model";
import {PatientService} from "../../services/patient.service";
import {MaliciousPatientService} from "../../services/malicious-patient.service";

@Component({
  selector: 'app-appointments-preview',
  templateUrl: './appointments-preview.component.html',
  styleUrls: ['./appointments-preview.component.css']
})
export class AppointmentsPreviewComponent implements OnInit {
  @Input() appointments :AppointmentResponse[]=[];

  displayedColumns: string[] = ['Date','start time','finish time','Cancel'];
  tomorrow= new Date();
  @Output() onDelete: EventEmitter<AppointmentResponse[]> = new EventEmitter();
  userToken:UserToken;
  public patient: MaliciousPatient = new MaliciousPatient();

  constructor(private maliciousPatientService: MaliciousPatientService, private readonly router:Router,private  client: AppointmentClient, public dialog: MatDialog,private tokenStorageService:TokenStorageService) {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.userToken = this.tokenStorageService.getUser();
  }

  ngOnInit(): void {
  }

  getDateFormat(date: Date) {
    return moment(date).format("MMMM Do, YYYY");
  }
  getHourFormat(date: Date) {
    return moment(date).format("h:mma");
  }

  onCancel(id: string) {
    console.log("id:")
    console.log(this.tokenStorageService.getUser().id)
    this.client.cancelAppointment(id).subscribe({
        next : response =>{
          alert("success");
          console.log(response)
          this.appointments = this.appointments.filter((a) => a.id != id);
          console.log(this.appointments)
          this.onDelete.emit()

          this.maliciousPatientService.maliciousPatientStatus(this.tokenStorageService.getUser().id).subscribe(res => {
            this.patient = res;
        })
      }
    })
  }

  canCancel(date:Date)
  {
    return this.tomorrow < date;
  }





}
