import { Component } from '@angular/core';
import * as moment from 'moment';
import { AlexaService } from './core/Service/alexa.service';

@Component({
  selector: 'mirror-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mirror';
  status = true;

  constructor(
    private mumble: AlexaService
  ) {
    this.mumble.start();
    this.mumble.addCommand('standby', 'turn mirror off', () => {
      console.error('turn mirror off');
      this.status = false;
    });
    this.mumble.addCommand('turn on', 'turn mirror on', () => {
      console.error('turn mirror on');
      this.status = true;
    });
    moment.locale('de');
  }
}
