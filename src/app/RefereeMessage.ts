import {Team} from './Team';
import {Command} from './Command';
import {Stage} from './Stage';
import {GameEvent} from './GameEvent';

export class RefereeMessage {
  Stage: Stage;
  Command: Command;
  TeamYellow: Team;
  TeamBlue: Team;
  GameEvent: GameEvent;


  constructor() {
    this.Stage = new Stage();
    this.Command = new Command();
    this.TeamYellow = new Team('yellow team', 1);
    this.TeamBlue = new Team('blue team', 2);
    this.GameEvent = new GameEvent();
  }
}
