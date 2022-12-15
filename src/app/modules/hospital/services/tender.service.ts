import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tender, TenderOffer } from "../model/tender.model";

@Injectable({
    providedIn: 'root'
  })

  export class TenderService {
    apiHost: string = 'http://localhost:5001/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    constructor(private http: HttpClient) { }
    
    getTenders(): Observable<Tender[]> {
        return this.http.get<Tender[]>(this.apiHost + 'api/tender/all', {headers: this.headers});
      }

    updateTender(tender: TenderOffer): Observable<any>{
      return this.http.put<any>(this.apiHost + 'api/tender/addOffer',tender, {headers: this.headers})
    }
  }