import {Component, Input} from '@angular/core';
import {Team} from '../../Team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input('team') team: Team;
  @Input('color') color: string;

}
