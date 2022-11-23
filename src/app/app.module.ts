import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './modules/toolbar/toolbar.component';
import {ApplicationUserClient} from "./api/api-reference";
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {NgToastModule} from "ng-angular-popup";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    MaterialModule,
    NgToastModule
  ],
  providers: [ApplicationUserClient,
             authInterceptorProviders,],
  bootstrap: [AppComponent]
})
export class AppModule { }
