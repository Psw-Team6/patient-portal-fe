import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';
import {CreatePatientModel} from "../model/createPatient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }



  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiHost + 'api/patients/' + id, {headers: this.headers});
  }

  createPatient(patient: any): Observable<CreatePatientModel> {
    return this.http.post<CreatePatientModel>(this.apiHost + 'api/v1/Patient', patient, {headers: this.headers});
  }
}
