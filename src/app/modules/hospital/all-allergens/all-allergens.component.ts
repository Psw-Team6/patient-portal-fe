import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DoctorResponse} from "../../../api/api-reference";
import {DoctorService} from "../services/doctor.service";
import {AllergenModel} from "../model/allergen.model";
import {AllergenService} from "../services/allergen.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-all-allergens',
  templateUrl: './all-allergens.component.html',
  styleUrls: ['./all-allergens.component.css']
})
export class AllAllergensComponent implements OnInit {

  @Output() onSelectedAllergen: EventEmitter<string> = new EventEmitter()
  selectedItem: AllergenModel
  selectedAllergens = new FormControl('');
  allergens:AllergenModel[]=[]

  constructor(private allergenService: AllergenService) {
    this.selectedItem = new AllergenModel();
  }

  ngOnInit(): void {
    this.allergenService.getAll().subscribe(
      {
        next: response => {
          this.allergens = response;
          console.log(this.allergens);
        }
      }
    )
  }

  public selectedAllergen(){
    if(this.selectedAllergens !== null && this.selectedAllergens !== undefined)
      { // @ts-ignore
        this.onSelectedAllergen.emit(this.selectedAllergens.value)
      }
  }


}

