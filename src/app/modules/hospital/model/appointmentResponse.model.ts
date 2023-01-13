import {Duration} from "./duration.model";

export class AppointmentResponseModel {
  patientId: string = '';
  doctorId: string = '';
  duration: Duration = new Duration();

  public constructor(obj?: any) {
    if (obj) {
      this.patientId = obj.patientId;
      this.doctorId = obj.doctorId;
      this.duration = obj.duration;
    }
  }
}
