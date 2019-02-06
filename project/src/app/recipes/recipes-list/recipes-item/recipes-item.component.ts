import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
  } 
  onSelect() {

    this.recipeService.recipeSelected.emit(this.recipe);

  }

}
