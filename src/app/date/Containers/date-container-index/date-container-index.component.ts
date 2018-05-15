import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mirror-date-container-index',
  templateUrl: './date-container-index.component.html',
  styleUrls: ['./date-container-index.component.scss']
})
export class DateContainerIndexComponent implements OnInit {

  currentTime = new Date();

  constructor() { }

  ngOnInit() {
    this.clockTick();
  }

  clockTick() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
