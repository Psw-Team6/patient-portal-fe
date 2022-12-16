import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";
import {TokenStorageService} from "../../hospital/services/token-storage.service";
import {Router} from "@angular/router";
import {ApplicationUserClient, LoginRequest} from "../../../api/api-reference";
import {CreatePatientModel} from "../../hospital/model/createPatient.model";
import {PatientService} from "../../hospital/services/patient.service";

interface BloodType {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rightActive:boolean = false
  patientUrl:string = "https://patient-portal"
  loginForm = new FormGroup({
    username: new FormControl<string | undefined>(undefined),
    password: new FormControl<string | undefined>(undefined)
  })
  createPatientModel: CreatePatientModel = new CreatePatientModel();
  bloodTypes: BloodType[] = [
    {value: 0, viewValue: 'A-'},
    {value: 1, viewValue: 'A+'},
    {value: 2, viewValue: 'B-'},
    {value: 3, viewValue: 'B+'},
    {value: 4, viewValue: 'AB+'},
    {value: 5, viewValue: 'AB-'},
    {value: 6, viewValue: 'O+'},
    {value: 7, viewValue: 'O-'},
  ];

  constructor(private patientService: PatientService, private tokenStorageService:TokenStorageService,private applicationUserClient:ApplicationUserClient,
              private toast:NgToastService,private router:Router) { }
  ngOnInit(): void {

  }
  activatePanel():void {
    this.rightActive = ! this.rightActive
  }

   onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  onSelectingAllergen(value: string) {
    this.createPatientModel.allergyIds = value;
  }

  onSelectingDoctor(value: string) {
    this.createPatientModel.doctorId = value;
  }

  register() {
    if(!this.isValidInput()){
      return;
    }
    this.patientService.createPatient(this.createPatientModel).subscribe(
      res => {
        alert("Patient registered(inactive)")
        this.createPatientModel = new CreatePatientModel();
        this.toast.success({detail: 'Patient registered successfully!', summary: "Activation link sent to email!", duration: 5000})
      },
      error => {
        if(error.status == '409') {
          alert("Username already exists!")
          this.toast.error({detail: 'This username already exists!', summary: error.status, duration: 5000})
        }
      });
  }

  private isValidInput(): boolean {
    if (this.createPatientModel.name == ''){
      this.toast.error({detail: 'Enter a name!', summary: "Fill all the fields!", duration: 5000})
      return false;
    }
    if (this.createPatientModel.surname == ''){
      this.toast.error({detail: 'Enter a surname!', summary: "Fill all the fields!", duration: 5000})
      return false;

    }
    if (this.createPatientModel.username == ''){
      this.toast.error({detail: 'Enter a username!', summary: "Fill all the fields!", duration: 5000})
      return false;
    }
    if (this.createPatientModel.email == ''){
      this.toast.error({detail: 'Enter an email!', summary: "Fill all the fields!", duration: 5000})
      return false;
    }
    if (this.createPatientModel.password == ''){
      this.toast.error({detail: 'Enter a password!', summary: "Fill all the fields!", duration: 5000})
      return false;
    }
    if (this.createPatientModel.jmbg == ''){
      this.toast.error({detail: 'Enter a jmbg!', summary: "Fill all the fields!", duration: 5000})
      return false;
    }
    if (this.createPatientModel.dateOfBirth.toString() == "" || this.createPatientModel.dateOfBirth == undefined){
      this.toast.error({detail: 'Enter a date of birth!', summary: "Fill all the fields!", duration: 5000})
      return false;
    }
    if (this.createPatientModel.doctorId == '' || this.createPatientModel.doctorId == undefined){
      this.toast.error({detail: 'Select a doctor!', summary: "A doctor must be selected...", duration: 5000})
      return false;
    }
    if (this.createPatientModel.bloodType == 10 || this.createPatientModel.doctorId == undefined){
      this.toast.error({detail: 'Select your blood type!', summary: "Blood type be selected...", duration: 5000})
      return false;
    }
    return true;
  }

  public signIn() {
    const loginRequest:LoginRequest = new LoginRequest({
      username: this.loginForm.controls.username.value!,
      password: this.loginForm.controls.password.value!,
      portalUrl : this.patientUrl
    })
   console.log(loginRequest);
    this.applicationUserClient.authenticate(loginRequest).subscribe({
      next: response => {
          console.log(response)
          this.tokenStorageService.saveToken(response.token!)
          this.tokenStorageService.saveUser(response.token!)
          this.toast.success({detail: 'Success!', summary: response.message, duration: 5000})
          this.router.navigate(['home']).then(
            ()=>{
              window.location.reload();
            }
          );
        },
        error: message => {
          console.log(message.Error)
          this.toast.error({detail: 'Error!', summary: message.Error, duration: 5000})
        }

      }
    )
  }
}
