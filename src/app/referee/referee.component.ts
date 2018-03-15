import {Component, OnInit} from '@angular/core';
import {RefereeService} from '../referee.service';
import {RefereeMessage} from '../RefereeMessage';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {

  refereeMessage = new RefereeMessage();
  private refereeService: RefereeService;
  showDetails: Boolean = false;

  constructor(refereeService: RefereeService) {
    this.refereeService = refereeService;
  }

  ngOnInit() {
    this.refereeService.socket.subscribe(
      (refereeMsg: MessageEvent) => this.refereeMessage = JSON.parse(refereeMsg.data)
    );
  }
}
