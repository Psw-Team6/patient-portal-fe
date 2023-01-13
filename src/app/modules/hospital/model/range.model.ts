export class Range {
  from: Date = new Date();
  to: Date = new Date();

  public constructor(obj?: any) {
    if (obj) {
      this.from = obj.from;
      this.to = obj.to;
    }
  }
}
