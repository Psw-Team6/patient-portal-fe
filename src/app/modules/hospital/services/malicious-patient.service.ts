import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MaliciousPatient} from "../model/malicious-patient.model";

@Injectable({
  providedIn: 'root'
})
export class MaliciousPatientService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  maliciousPatientStatus(id: any): Observable<any> {
    console.log("adsdasda");
    return this.http.put<any>(this.apiHost + 'api/v1/MaliciousPatient/maliciousPatientStatus/' + id, {headers: this.headers});
  }

}

