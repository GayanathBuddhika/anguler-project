import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

export class RecipeService {

    recipeSelected = new EventEmitter();
    private  recipes: Recipe[] = [
        new Recipe('The Test Recipe one', 'This is simply a test recipe one ', 'https://cdn.pixabay.com/photo/2016/01/08/08/31/paella-1127334_1280.jpg'),
        new Recipe('The Test Recipe two', 'This is simply a test recipe two', 'https://cdn.pixabay.com/photo/2016/01/08/08/31/paella-1127334_1280.jpg')
    ];

    getRecipe(){

        return this.recipes.slice();
    }



}