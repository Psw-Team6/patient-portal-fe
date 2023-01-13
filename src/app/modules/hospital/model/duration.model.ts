export class Duration {
  from: Date | null | undefined = new Date();
  to: Date | null | undefined= new Date();

  public constructor(obj?: any) {
    if (obj) {
      this.from = obj.from;
      this.to = obj.to;
    }
  }
}
