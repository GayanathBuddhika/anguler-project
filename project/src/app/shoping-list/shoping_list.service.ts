import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shaird/ingredient.model';

export class ShopingListService {

    changedIngredient = new EventEmitter();
    private ingerdiens: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 7)
    ];

    getingerdient() {
        return this.ingerdiens.slice();

    }

    addIngerdient(ingredient: Ingredient) {
        this.ingerdiens.push(ingredient);
        this.changedIngredient.emit(this.ingerdiens.slice());

    }

}
