import { NodeWithI18n } from "@angular/compiler";

export class Feedback {
    patientId: string = '7df120aa-9e69-47e6-ac7b-e961e3977a63';
    date: Date = new Date();
    text: string = '';
    isAnonymous: Boolean = false;
    isPublic: Boolean = false;
    status: Number = 2;


    public constructor(obj?: any) {
        if (obj) {
            this.patientId = obj.patientId;
            this.date = obj.date;
            this.text = obj.text;
            this.isAnonymous = obj.isAnonymous;
            this.isPublic = obj.isPublic;
            this.status = obj.status;        
        }
    }
}