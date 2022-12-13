import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BloodUnitAmount, TenderOffer } from '../../model/tender.model';
import { AllTendersComponent } from '../all-tenders.component';

export interface DialogData {
  comment: string;
  bloodUnitAmount : BloodUnitAmount [];
  price: number;
  realizationDate: Date;
}

@Component({
  selector: 'app-details-tender-component',
  templateUrl: './details-tender-component.component.html',
  styleUrls: ['./details-tender-component.component.css']
})


export class DetailsTenderComponentComponent {
  tenderOffer : TenderOffer = new TenderOffer();
  bloodUnitAmount : BloodUnitAmount []=[];
  price: number | undefined;
  realizationDate: Date | undefined;
  todayDate: Date = new Date();
  constructor( private router: Router, public dialogRef: MatDialogRef<AllTendersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
      this.todayDate=new Date();
      this.bloodUnitAmount=data.bloodUnitAmount;
    }

    public close(){
      this.dialogRef.close("");
    }    


    public getBloodUnitAmount(type: number) {
      return this.bloodUnitAmount.find(x=> x.bloodType===type)?.amount;
    }

    public addOffer(){
        if (this.price === undefined || this.price === 0) {
          alert("Price cannot be 0.");
        }

        if (this.realizationDate === undefined) {
          alert("Realization date must be entered.");
        }
        this.tenderOffer.price=this.price;
        this.tenderOffer.realizationDate=this.realizationDate;

        try {
          this.dialogRef.close(this.tenderOffer);
        }catch(error) {
          alert(error)
        }
    }
    
}

