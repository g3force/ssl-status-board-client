import {Component, OnInit} from '@angular/core';
import {RefereeService} from '../referee.service';
import {RefereeMessage} from '../RefereeMessage';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import {Team} from '../Team';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  refereeMessage: RefereeMessage;
  private socket: Subject<any>;

  constructor(private refereeService: RefereeService) {
    this.socket = refereeService.createWebSocket();
    this.refereeMessage = new RefereeMessage(new Team('y', 0), new Team('b', 0));
  }

  ngOnInit() {
    this.socket.subscribe(
      refereeMsg => this.refereeMessage = JSON.parse(refereeMsg.data)
    );
  }
}
