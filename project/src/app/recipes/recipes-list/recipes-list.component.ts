import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('The Test Recipe', 'This is simply a test recipe ', 'https://cdn.pixabay.com/photo/2016/01/08/08/31/paella-1127334_1280.jpg'),
    new Recipe('The Test Recipe', 'This is simply a test recipe ', 'https://cdn.pixabay.com/photo/2016/01/08/08/31/paella-1127334_1280.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
