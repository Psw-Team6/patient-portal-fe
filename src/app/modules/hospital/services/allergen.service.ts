import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AllergenModel} from "../model/allergen.model";

@Injectable({
  providedIn: 'root'
})
export class AllergenService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<AllergenModel[]> {
    return this.http.get<AllergenModel[]>(this.apiHost + 'api/v1/Allergen', {headers: this.headers});
  }

  /*  getRoom(id: number): Observable<Room> {
     return this.http.get<Room>(this.apiHost + 'api/rooms/' + id, {headers: this.headers});
   }

   deleteRoom(id: any): Observable<any> {
     return this.http.delete<any>(this.apiHost + 'api/rooms/' + id, {headers: this.headers});
   }

   updateRoom(room: any): Observable<any> {
     return this.http.put<any>(this.apiHost + 'api/rooms/' + room.id, room, {headers: this.headers});
   } */

}
