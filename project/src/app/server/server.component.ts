import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  buttonStatus = 'gayath';
  status = 'button is no click';
  dogstatus = false;
  dog = '';
  frind = '';
  babys=[];
  constructor() {
    this.frind = Math.random() > 0.5 ? 'good frind' : 'bad frind';
  }

  ngOnInit() {
  }
  click() {

    this.dogstatus = true;

    this.status = 'button is click';
    this.babys.push(this.dog);

  }
  getFrind() {
    return this.frind;
  }
  getColler() {
    return this.frind === 'good frind' ? 'green' : 'blue';
  }


}
