import { Component } from '@angular/core';
import { fadeAnimation } from './core/helpers/Animation';
import * as moment from 'moment';
import { AlexaService } from './core/Service/alexa.service';

@Component({
  selector: 'mirror-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'mirror';

  constructor(
    private mumble: AlexaService
  ) {
    this.mumble.start();
    moment.locale('de');
  }
}
