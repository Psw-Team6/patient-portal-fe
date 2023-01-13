import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DoctorClient, DoctorResponse} from "../../../api/api-reference";
import {DoctorService} from "../services/doctor.service";

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  @Output() onSelectedDoctor: EventEmitter<string> = new EventEmitter()
  selectedItem: DoctorResponse
  doctors:DoctorResponse[]=[]

  constructor(private doctorService: DoctorService) {
    this.selectedItem = new DoctorResponse()
  }

  ngOnInit(): void {
    this.doctorService.getAll().subscribe(
      {
        next: response => {
          this.doctors = response;
          console.log(this.doctors);
        }
      }
    )
  }
  public selectedDoctor(value: string){
    this.onSelectedDoctor.emit(value)
  }

}
