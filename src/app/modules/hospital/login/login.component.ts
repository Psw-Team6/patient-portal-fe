import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";
import {ApplicationUserClient, LoginRequest} from "../../../api/api-reference";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rightActive:boolean = false
  PatientUrl:string = "https://patient-portal"
  loginForm = new FormGroup({
    username: new FormControl<string | undefined>(undefined),
    password: new FormControl<string | undefined>(undefined)
  })

  constructor(private tokenStorageService:TokenStorageService,private applicationUserClient:ApplicationUserClient,
              private toast:NgToastService,private router:Router) { }
  ngOnInit(): void {

  }
  activatePanel():void {
    this.rightActive = ! this.rightActive
  }

  public signIn() {
    const loginRequest:LoginRequest = new LoginRequest({
      username: this.loginForm.controls.username.value!,
      password: this.loginForm.controls.password.value!,
      portalUrl : this.PatientUrl
    })

    this.applicationUserClient.authenticate(loginRequest).subscribe({
        next: response => {
          console.log(response)
          this.tokenStorageService.saveToken(response.token!)
          this.tokenStorageService.saveUser(response.userToken!)
          this.toast.success({detail: 'Success!', summary: response.message, duration: 5000})
          if(response.userToken!.role === 'Doctor'){
            this.router.navigate(['dashboard']).then(
              ()=>{
                window.location.reload();
                //this.changeDetectorRef.detectChanges();
              }
            )
          }

        },
        error: message => {
          console.log(message.Error)
          this.toast.error({detail: 'Error!', summary: message.Error, duration: 5000})
        }

      }
    )
  }
}
