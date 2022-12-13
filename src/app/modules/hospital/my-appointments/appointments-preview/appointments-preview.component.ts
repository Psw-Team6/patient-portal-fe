import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-appointments-preview',
  templateUrl: './appointments-preview.component.html',
  styleUrls: ['./appointments-preview.component.css']
})
export class AppointmentsPreviewComponent implements OnInit {
  appointments: any;


  constructor() { }

  ngOnInit(): void {
  }

  getDateFormat(date: Date) {
    return moment(date).format("MMMM Do, YYYY");
  }
  getHourFormat(date: Date) {
    return moment(date).format("h:mma");
  }

  onReschedule(id: string) {
    //this.router.navigateByUrl('/reschedule-appointment/'+ id);
    //this.router.navigate(['to-do-list', toDo.id]);
  }

  onCancel(id: string) {
   /* console.log("Cancel",id)
    this.client.cancelAppointment(id).subscribe({
        next : _ =>{
          console.log(this.appointments)
          this.appointments = this.appointments.filter((a) => a.id != id);
          console.log(this.appointments)
          this.onDelete.emit()
        }
      }
    )*/
  }

  canCancel(date:Date)
  {
    //return this.tomorrow < date;
  }


}
