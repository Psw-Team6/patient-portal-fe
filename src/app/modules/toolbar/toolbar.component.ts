import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateFeedbackComponent } from '../hospital/create-feedback/create-feedback.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})



export class ToolbarComponent implements OnInit {


  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFeedbackComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openRegistration(): void{
    this.router.navigate(['/registration']);
  }

  ngOnInit(): void {
  }



}
