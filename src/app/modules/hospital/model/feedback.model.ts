import { NodeWithI18n } from "@angular/compiler";

export class Feedback {
    patientId: string = '445bc39c-2faa-4e36-85e1-1252531a879c';
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
