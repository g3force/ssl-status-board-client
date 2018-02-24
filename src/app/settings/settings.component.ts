import {Component} from '@angular/core';
import {RefereeService} from '../referee.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  private refereeService: RefereeService;
  private statusWebSocket: string;

  constructor(refereeService: RefereeService) {
    this.refereeService = refereeService;
    this.statusWebSocket = RefereeService.getStatusWebSocketAddress();
  }

  onEnter(value: string) {
    this.refereeService.updateWebSocketAddress(value);
    this.statusWebSocket = RefereeService.getStatusWebSocketAddress();
  }
}
