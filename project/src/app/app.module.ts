import { ShopingListService } from './shoping-list/shoping_list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HederComponent } from './heder/heder.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { DropDownDirective } from './shaird/drop-down.directive';

@NgModule({
   declarations: [
      AppComponent,
      HederComponent,
      RecipesComponent,
      RecipesListComponent,
      RecipesDetailComponent,
      RecipesItemComponent,
      ShopingListComponent,
      ShopingEditComponent,
      DropDownDirective
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [ShopingListService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
