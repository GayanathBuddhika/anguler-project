import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecip: Recipe;

  constructor(private recipeServce: RecipeService) { }

  ngOnInit() {

    this.recipeServce.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecip = recipe;
      }
    )
  }

}
