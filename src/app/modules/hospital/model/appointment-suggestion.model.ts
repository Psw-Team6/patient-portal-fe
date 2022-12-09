import * as moment from "moment";

export class AppointmentSuggestionModel {
  doctorId: string = '';
  doctorName: string = 'Neki';
  doctorSurname: string = 'Lekar';
  startDate: Date = new Date();
  endDate: Date = new Date();

  public constructor(obj?: any) {
    if (obj) {
      this.doctorId = obj.doctorId;
      this.doctorName = obj.doctorName;
      this.doctorSurname = obj.doctorSurname;
      this.startDate = obj.startDate;
      this.endDate = obj.endDate;
    }
  }

  getDateFormat(date: Date) {
    return moment(date).format("MMMM Do, YYYY");
  }
}
