export class Phone {
  ToPhone: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.ToPhone = obj.ToPhone;
    }
  }
}
