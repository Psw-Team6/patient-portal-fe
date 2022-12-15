import * as moment from "moment";
import {Duration} from "./duration.model";

export class AppointmentSuggestionModel {
  doctorId: string = '';
  doctorName: string = 'Neki';
  doctorSurname: string = 'Lekar';
  duration: Duration = new Duration();

  public constructor(obj?: any) {
    if (obj) {
      this.doctorId = obj.doctorId;
      this.doctorName = obj.doctorName;
      this.doctorSurname = obj.doctorSurname;
      this.duration = obj.duration;
    }
  }

  getDateFormat(date: Date) {
    return moment(date).format("MMMM Do, YYYY");
  }
}
