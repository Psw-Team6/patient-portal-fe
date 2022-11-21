import { Component, OnInit } from '@angular/core';
import {DialogSignComponent} from "./dialog-sign/dialog-sign.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog('0ms','0ms')
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogSignComponent, {
      width: '500px',
      height:'200px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}
