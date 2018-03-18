export class Stage {
  Id: number;
  Name: string;
  TimeLeft: number;


  constructor() {
    this.Id = -1;
    this.Name = 'unknown stage';
    this.TimeLeft = 100000000;
  }
}
