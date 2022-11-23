import { Address} from "./address.model";

export class Patient {
  username: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  address: Address = new Address();
  phone: string = '';
  jmbg: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.username = obj.username;
      this.name = obj.name;
      this.surname = obj.surname;
      this.email = obj.email;
      this.address = obj.address;
      this.phone = obj.phone;
      this.jmbg = obj.jmbg;
    }
  }
}
