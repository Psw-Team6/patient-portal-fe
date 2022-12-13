export enum BloodType {
    Apos = 0,
    Aneg = 1,
    Bpos = 2,
    Bneg = 3,
    ABpos = 4,
    ABneg = 5,
    Opos = 6,
    Oneg = 7,
  }

export class BloodUnitAmount {
    bloodType: BloodType | undefined;
    amount: number | undefined;    
}
export enum StatusTender {
Open=0,
InProcess=1,
Close=2
}

export class TenderOffer {
  tender : Tender | undefined;
  price : number | undefined;
  realizationDate:Date | undefined;
  bloodBankName: string | undefined;
}

export class Tender {
    bloodUnitAmount : BloodUnitAmount []=[];
    hasDeadline : boolean = false;
    deadlineDate: Date = new Date();
    publishedDate: Date = new Date();
    status:StatusTender|undefined
    

    public constructor(obj?: any) {
        if (obj) {
          this.bloodUnitAmount = obj.bloodUnitAmount;
          this.hasDeadline = obj.hasDeadline;
          this.deadlineDate = obj.deadlineDate;
          this.publishedDate = obj.publishedDate;
          this.status=obj.status;
        }
      }
}