import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyAppointments} from "../model/my-appointments.model";



export class AppointmentService{
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient){}

  getPatientAppointment(patientId: string): Observable<MyAppointments[]>{
    return this.http.get<MyAppointments[]>(this.apiHost + 'api/v1/Appointment/GetPatientAppointments/' + patientId, {headers: this.headers})
  }

}
