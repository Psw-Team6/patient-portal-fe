import { Address} from "./address.model";
import { AllergenModel } from "./allergen.model";
import { Doctor} from "./doctor.model";

export class Patient {
  username: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  address: Address = new Address();
  phone: string = '';
  jmbg: string = '';
  gender: number = 0;
  allergen: AllergenModel = new AllergenModel();
  doctor: Doctor = new Doctor();
  bloodType: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.username = obj.username;
      this.name = obj.name;
      this.surname = obj.surname;
      this.email = obj.email;
      this.address = obj.address;
      this.phone = obj.phone;
      this.jmbg = obj.jmbg;
      this.gender = obj.gender;
      this.allergen = obj.allergen;
      this.doctor = obj.doctor;
      this.bloodType = obj.bloodType;
    }
  }
}
