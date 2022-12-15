import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyAppointments} from "../model/my-appointments.model";
import {Injectable} from "@angular/core";
import {AppointmentSuggestionModel} from "../model/appointment-suggestion.model";
import {AppointmentResponseModel} from "../model/appointmentResponse.model";
import {CreatePatientModel} from "../model/createPatient.model";

@Injectable({
  providedIn: 'root'
})

export class AppointmentService{
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient){}


  getPatientAppointment(patientId: string): Observable<MyAppointments[]>{
    return this.http.get<MyAppointments[]>(this.apiHost + 'api/v1/Appointment/GetPatientAppointments/' + patientId, {headers: this.headers})
  }

  getAppointmentSuggestions(time: boolean, app: AppointmentResponseModel): Observable<AppointmentSuggestionModel[]>{
    console.log(time, app)
    return this.http.post<AppointmentSuggestionModel[]>(this.apiHost + 'api/v1/Doctor/FreeTermsByTimePriority/' + time, app, {headers: this.headers})
  }

  getAppointmentSuggestionsDoctor(app: AppointmentResponseModel): Observable<AppointmentSuggestionModel[]>{
    console.log(app)
    return this.http.post<AppointmentSuggestionModel[]>(this.apiHost + 'api/v1/Doctor/FreeTermsByDoctorPriority', app, {headers: this.headers})
  }

  createAppointment(appointment: any): Observable<AppointmentResponseModel> {
    return this.http.post<AppointmentResponseModel>(this.apiHost + 'api/v1/Appointment', appointment, {headers: this.headers});
  }


}
