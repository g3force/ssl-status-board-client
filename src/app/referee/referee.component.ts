import {Component, OnInit} from '@angular/core';
import {RefereeService} from '../referee.service';
import {RefereeMessage} from '../RefereeMessage';
import {Team} from '../Team';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {

  refereeMessage = new RefereeMessage();
  private refereeService: RefereeService;
  showDetails: Boolean = false;
  knownLogos: string[] = ['tigers-mannheim'];

  constructor(refereeService: RefereeService) {
    this.refereeService = refereeService;
  }


  updateLogoUrl(team: Team) {

    const logoBaseName = team.Name.toLowerCase().replace(' ', '-');
    if (this.knownLogos.includes(logoBaseName)) {
      team.logoUrl = 'assets/logos/' + logoBaseName + '.png';
    }
  }

  ngOnInit() {
    this.refereeService.socket.subscribe(
      (refereeMsg: MessageEvent) => this.updateRefereeMessage(JSON.parse(refereeMsg.data))
    );
  }

  updateRefereeMessage(refereeMessage: RefereeMessage) {
    this.refereeMessage = refereeMessage;
    this.updateLogoUrl(this.refereeMessage.TeamYellow);
    this.updateLogoUrl(this.refereeMessage.TeamBlue);
  }
}
