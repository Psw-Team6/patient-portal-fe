import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateFeedbackComponent } from '../hospital/create-feedback/create-feedback.component';
import {Router} from "@angular/router";
import {TokenStorageService} from "../hospital/services/token-storage.service";
import {
  CreatePatientHealthStateComponent
} from "../hospital/create-patient-health-state/create-patient-health-state.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})



export class ToolbarComponent implements OnInit {
loggedIn = false;

  constructor(public dialog: MatDialog, private router: Router, private tokenService : TokenStorageService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFeedbackComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openHealthRecordDialog(): void {
    const dialogRef = this.dialog.open(CreatePatientHealthStateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openRegistration(): void{
    this.router.navigate(['/registration']);
  }

  ngOnInit(): void {
    this.loggedIn = this.tokenService.isLoggedIn();
  }


  openLoginForm() {
    this.router.navigate(['']);
  }

  onSignOut() {
    this.router.navigate(['sign-out']);

  }

  openProfile(): void{
    this.router.navigate(['/profile']);
  }

  openPreferenceHospitalization(): void{
    this.router.navigate(['/hospitalize-with-preference']);
  }

  openHome(): void{
    this.router.navigate(['']);
  }


  openMyAppointments(): void{
    this.router.navigate(['/my-appointments']);
  }

  openScheduleAppointment(): void{
    this.router.navigate(['/schedule-appointment'])
  }

}
