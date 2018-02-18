export class Team {
  Name: string;
  Goals: number;
  RedCards: number;
  YellowCards: number;
  YellowCardTimes: number[];
  Timeouts: number;
  TimeoutTime: number;

  constructor(name: string, goals: number) {
    this.Name = name;
    this.Goals = goals;
  }
}
