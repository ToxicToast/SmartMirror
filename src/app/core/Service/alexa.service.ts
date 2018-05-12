import { Injectable } from '@angular/core';
import * as mumble from 'mumble-js';

@Injectable({
  providedIn: 'root'
})
export class AlexaService {

  private mumbleClass;

  constructor() {
    this.mumbleClass = new mumble({
      language: 'en-US',
      debug: true,
      commands: [ ]
    });
  }

  start() {
    this.mumbleClass.start();
  }

  addCommand(title: string, command: string, callback: Function) {
    this.mumbleClass.addCommand(title, command, callback);
  }

}
