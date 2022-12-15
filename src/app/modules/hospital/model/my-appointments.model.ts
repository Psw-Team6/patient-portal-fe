import {AppointmentState, AppointmentType, DateRange} from "../../../api/api-reference";
import {Patient} from "./patient.model";

export class MyAppointments{
  id?: string;
  emergent?: boolean;
  duration?: DateRange | undefined;
  patientId?: string;
  patient?: Patient | undefined;
  appointmentType?: AppointmentType;
  doctorId?: string;
  appointmentState?: AppointmentState;

  public constructor(obj?:any){
    if(obj) {
      this.id = obj.id;
      this.emergent = obj.emergent;
      this.duration = obj.duration;
      this.patientId = obj.patientId;
      this.doctorId = obj.doctorId;
      this.appointmentType = obj.appointmentType;
      this.appointmentState = obj.appointmentState;
    }
  }

}

