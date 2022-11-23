import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiHost + 'api/patients', {headers: this.headers});
  }

  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(this.apiHost + 'api/v1/PatientProfile/' + id, {headers: this.headers});
  }

  deletePatient(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/patients/' + id, {headers: this.headers});
  }

  createPatient(patient: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/patients', patient, {headers: this.headers});
  }

  updatePatient(patient: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/patients/' + patient.id, patient, {headers: this.headers});
  }
}
