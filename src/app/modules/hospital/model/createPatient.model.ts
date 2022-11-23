import { Address} from "./address.model";

export class CreatePatientModel {
  username: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  address: Address = new Address();
  phone: string = '';
  jmbg: string = '';
  dateOfBirth: Date = new Date();
  doctorId: string = '';
  gender: number = 0;
  allergyIds: string = '';
  bloodType: number = 10;

  public constructor(obj?: any) {
    if (obj) {
      this.username = obj.username;
      this.gender = obj.gender;
      this.name = obj.name;
      this.password = obj.password;
      this.surname = obj.surname;
      this.email = obj.email;
      this.address = obj.address;
      this.phone = obj.phone;
      this.jmbg = obj.jmbg;
      this.dateOfBirth = obj.dateOfBirth;
      this.doctorId = obj.doctorId;
      this.allergyIds = obj.allergyIds;
      this.bloodType = obj.bloodType;
    }
  }
}
