import { NodeWithI18n } from "@angular/compiler";

export class Feedback {
    patientId: string = '57b414cd-1c04-4e4c-8af3-c37961354b38';
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