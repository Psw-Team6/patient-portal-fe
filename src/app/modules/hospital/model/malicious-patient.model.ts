import {PatientResponse} from "../../../api/api-reference";

export class MaliciousPatient {
  id: string = '';
  startDate: string = '';
  numberOfCancellations: number = 0;
  malicious: boolean = false;
  patient: PatientResponse = new PatientResponse();

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.startDate = obj.startDate;
      this.numberOfCancellations = obj.numberOfCancellations;
      this.malicious = obj.malicious;
      this.patient = obj.patient;
    }
  }
}
