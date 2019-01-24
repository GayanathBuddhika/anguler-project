import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seve',
  templateUrl: './seve.component.html',
  styleUrls: ['./seve.component.css']
})
export class SeveComponent implements OnInit {
  name = 'gayanath';
  age = 10;

  constructor() { }

  ngOnInit() {
  }
getage(){
  return this.age;
}

}
