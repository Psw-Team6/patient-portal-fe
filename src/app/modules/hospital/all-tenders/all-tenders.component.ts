import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';
import { Tender, TenderOffer } from '../model/tender.model';
import { TenderService } from '../services/tender.service';
import { TokenStorageService } from '../services/token-storage.service';
import { DetailsTenderComponentComponent } from './details-tender-component/details-tender-component.component';



@Component({
  selector: 'app-all-tenders',
  templateUrl: './all-tenders.component.html',
  styleUrls: ['./all-tenders.component.css']
})
export class AllTendersComponent implements OnInit {

  public displayedColumns = ['publishedDate','deadlineDate', 'status', 'details'];
  public allTenders : Tender[] = [];
  public request : Tender=new Tender();
  public dataSource = new MatTableDataSource<Tender>();
  public comment : string = "";
  public price : number = 0;
  public realizationDate = new Date();
  public tenderOffer: TenderOffer = new TenderOffer();
  constructor(private service: TenderService, private router: Router, public dialog: MatDialog, private tokenStorageService:TokenStorageService, private alert: NgToastService) { }

  ngOnInit(): void {
    this.service.getTenders().subscribe(res => {
      this.allTenders = res;
      this.dataSource.data = this.allTenders;
    })
  }

  public statusToString(status:number){
    if (status == 0){
        return "OPEN";
    }else if (status == 1){
        return "IN PROCESS";
    }else if (status == 2){
        return "CLOSE";
    }else{
        return "UNKNOWN";
    }
}

getDateFormat(date: Date) {
  return moment(date).format("MMMM Do, YYYY");
}

openDialog(request:Tender): void {
  this.request=request;
  const dialogRef = this.dialog.open(DetailsTenderComponentComponent, {
    width: '400px',
    data: {bloodUnitAmount: request.bloodUnitAmount},
  });
  dialogRef.afterClosed().subscribe(result => {
    this.tenderOffer = result;
    this.tenderOffer.tender=request;
    if (this.tenderOffer.price == 0 || this.tenderOffer.price == undefined){

    }else{
      this.tenderOffer.bloodBankName = this.tokenStorageService.getUser().name;
      this.service.updateTender(this.tenderOffer).subscribe(_=> {
          this.alert.info({detail: 'Info!', summary: "You have submitted a tender offer!", duration: 5000})
          this.ngOnInit();
      });
    }
  });
}
}


