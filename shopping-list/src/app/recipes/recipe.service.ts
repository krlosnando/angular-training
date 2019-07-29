import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Lime Roasted Salmon", "Description of Lime Roasted Salmon", "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg"),
        new Recipe("Jackie Mercandetti", "Description of Jackie Mercandetti", "https://images1.phoenixnewtimes.com/imager/u/original/10943016/phoenix_new_times_progress_restaurant_jackie_mercandetti_photo_09.jpg"),
        new Recipe("Foods of Singapore", "Description of Foods of Singapore", "https://i1.wp.com/travelforfoodhub.com/wp-content/uploads/2018/04/Foods-of-Singapore.jpg")
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
}