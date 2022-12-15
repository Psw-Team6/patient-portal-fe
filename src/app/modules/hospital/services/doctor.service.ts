import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback.model';
import {Doctor, DoctorResponse} from "../../../api/api-reference";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllGeneral(): Observable<DoctorResponse[]> {
    return this.http.get<DoctorResponse[]>(this.apiHost + 'api/v1/Doctor/General', {headers: this.headers});
  }

  getAll(): Observable<DoctorResponse[]> {
    return this.http.get<DoctorResponse[]>(this.apiHost + 'api/v1/Doctor', {headers: this.headers});
  }

  deleteRoom(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/rooms/' + id, {headers: this.headers});
  }

  updateRoom(room: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/rooms/' + room.id, room, {headers: this.headers});
  }
}
