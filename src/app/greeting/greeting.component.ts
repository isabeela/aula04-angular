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
}
