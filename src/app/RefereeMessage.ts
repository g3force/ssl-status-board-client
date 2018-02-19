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
    this.TeamYellow = new Team('y', 0);
    this.TeamBlue = new Team('b', 0);
    this.GameEvent = new GameEvent();
  }
}
