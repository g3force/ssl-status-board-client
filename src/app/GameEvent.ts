import {Originator} from './Originator';

export class GameEvent {
  Type: string;
  Originator: Originator;
  Message: string;

  constructor() {
    this.Type = 'unknown game event';
    this.Originator = new Originator();
    this.Message = 'custom message';
  }
}
