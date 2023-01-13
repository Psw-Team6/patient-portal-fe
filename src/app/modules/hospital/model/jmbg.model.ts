export class Jmbg {
  Text: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.Text = obj.Text;
    }
  }
}
