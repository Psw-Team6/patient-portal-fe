import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Examination } from "../../../api/api-reference";

@Injectable({
  providedIn: 'root'
})

export class ExaminationService {
  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getExaminations(): Observable<Examination[]> {
    return this.http.get<Examination[]>(this.apiHost + 'api/v1/Examination', {headers: this.headers});
  }
}
