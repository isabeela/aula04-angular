import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  name = '';

  constructor() {}

  ngOnInit() {}

  timestamp = new Date();
  getHour() {
    return this.timestamp.getHours();
  }

  isDawn() {
    return this.getHour() < 12;
  }

  isMorning() {
    return this.getHour() >= 6 && this.getHour() < 12;
  }

  isAfternoon() {
    return this.getHour() >= 12 && this.getHour() < 18;
  }

  isNight() {
    return this.getHour() >= 18 && this.getHour() < 24;
  }
}
