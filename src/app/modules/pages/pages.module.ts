import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
 
  ]
})
export class PagesModule { }
