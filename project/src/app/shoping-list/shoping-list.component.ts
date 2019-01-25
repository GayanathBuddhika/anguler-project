import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shaird/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingerdiens: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 7)
  ];
  constructor() { }

  ngOnInit() {
  }

}
