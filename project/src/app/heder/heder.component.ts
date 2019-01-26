import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {

  @Output('featureSelected') featureSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(feature) {
    this.featureSelected.emit(feature);


  }

}
