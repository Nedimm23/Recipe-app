import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2013/11/20/0/CCMPT217_chicken-schnitzels-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1385066228074.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),

        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://www.gannett-cdn.com/presto/2019/01/16/USAT/a5e37e7e-b2bb-4fc8-b5c8-f20a4461415b-03591-4_Big_King_XL_PR_Images_CR2.jpg?width=540&height=&fit=bounds&auto=webp',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}