import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {RefereeService} from './referee.service';
import {RefereeMessage} from './RefereeMessage';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private static webSocketKey = 'ssl-status-board-websocket-address';

  private socket: Subject<any>;
  private refereeService: RefereeService;
  private statusWebSocket: string;

  refereeMessage = new RefereeMessage();

  constructor(refereeService: RefereeService) {
    this.refereeService = refereeService;

    this.statusWebSocket = localStorage.getItem(AppComponent.webSocketKey);
    if (this.statusWebSocket == null) {
      this.statusWebSocket = environment.defaultStatusWebSocket;
    }
  }

  reconnect() {
    if (this.socket != null) {
      this.socket.unsubscribe();
      this.socket.complete();
    }

    this.socket = this.refereeService.createWebSocket(this.statusWebSocket);
    this.socket.subscribe(
      refereeMsg => this.refereeMessage = JSON.parse(refereeMsg.data)
    );
  }

  ngOnInit() {
    this.reconnect();
  }

  onEnter(value: string) {
    this.statusWebSocket = value;
    localStorage.setItem(AppComponent.webSocketKey, value);
    this.reconnect();
  }
}
