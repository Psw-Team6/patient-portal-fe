export class Address {
  id: number = 0;
  street: string = '';
  number: string = '';
  country: string = '';
  city: string = '';
  postalCode: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.street = obj.street;
      this.number = obj.number;
      this.country = obj.country;
      this.city = obj.city;
      this.postalCode = obj.postalCode;
    }
  }
}
