export class Team {
  Name: string;
  Goals: number;
  RedCards: number;
  YellowCards: number;
  YellowCardTimes: number[];
  Timeouts: number;
  TimeoutTime: number;
  logoUrl: string;

  constructor(Name: string, Goals: number, RedCards: number, YellowCards: number,
              YellowCardTimes: number[], Timeouts: number, TimeoutTime: number) {
    this.Name = Name;
    this.Goals = Goals;
    this.RedCards = RedCards;
    this.YellowCards = YellowCards;
    this.YellowCardTimes = YellowCardTimes;
    this.Timeouts = Timeouts;
    this.TimeoutTime = TimeoutTime;
  }
}
