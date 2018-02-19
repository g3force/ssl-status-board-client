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


  constructor(teamYellow: Team, teamBlue: Team) {
    this.Stage = new Stage();
    this.Command = new Command();
    this.TeamYellow = teamYellow;
    this.TeamBlue = teamBlue;
    this.GameEvent = new GameEvent();
  }
}
