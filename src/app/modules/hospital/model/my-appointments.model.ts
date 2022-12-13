import {AppointmentState, AppointmentType, DateRange} from "../../../api/api-reference";

export class MyAppointments{
  emergent: Boolean = false;
  duration: DateRange = new DateRange();
  patientId: string = '';
  doctorId: string = '';
  appointmentType: AppointmentType = 0;
  appointmentState: AppointmentState = 0;

  public constructor(obj?:any){
    if(obj) {
      this.emergent = obj.emergent;
      this.duration = obj.duration;
      this.patientId = obj.patientId;
      this.doctorId = obj.doctorId;
      this.appointmentType = obj.appointmentType;
      this.appointmentState = obj.appointmentState;
    }
  }

}

