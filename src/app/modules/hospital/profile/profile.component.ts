import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Patient} from "../model/patient.model";
import { PatientService} from "../services/patient.service";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public patient: Patient | undefined;

  constructor(private patientService: PatientService, private route: ActivatedRoute, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.patientService.getPatient(this.tokenStorageService.getUser().id).subscribe(res => {
      this.patient = res;
    })
  }
}
