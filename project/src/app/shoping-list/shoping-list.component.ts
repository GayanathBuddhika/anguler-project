import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shaird/ingredient.model';
import { ShopingListService } from './shoping_list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingerdiens: Ingredient[];
  constructor(private shopingListService: ShopingListService) { }

  ngOnInit() {
    this.ingerdiens = this.shopingListService.getingerdient();
    this.shopingListService.changedIngredient.subscribe(
      (ingerdient: Ingredient[]) => {
        this.ingerdiens = ingerdient;
      }
    );

  }

}
