import { EventEmitter, Output } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries',20)
            ]
        ),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Chicken',2),
                new Ingredient('fillets',3)
            ]
        )
    ];

    @Output() recipeSelected = new EventEmitter<Recipe>();
    getRecipes() {
        return this.recipes.slice();
    }
    
}