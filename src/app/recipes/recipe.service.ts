import { Recipe } from './recipe.model'; 
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    //place we can manager our recipes 
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('MAGGI',
                   'Yum Yum Noodles ',
                   'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2017/11/29/nestle-hit-by-new-maggi-noodle-setback-in-india/7591781-1-eng-GB/Nestle-hit-by-new-Maggi-noodle-setback-in-India_wrbm_large.jpg',
                   [
                       new Ingredient('Maggi Noodles',1),
                       new Ingredient('Maggi Masala',1),
                       new Ingredient('Water',1)
                   ]),
        new Recipe('KAJU CHIKKI',
                   'Cashew Sweet Soo Good',
                   'https://images-na.ssl-images-amazon.com/images/I/51gYsEWc8ZL.jpg',
                   [
                       new Ingredient('Kaju',100),
                       new Ingredient('Jaggery',1),
                       new Ingredient('Water',2)
                   ]),
        new Recipe('CORN CRISPS',
                   'Tasty!!! Hungry..',
                   'https://1.bp.blogspot.com/_hkjOnjdDygU/SPjCOI9iyvI/AAAAAAAADek/_UE9XOXtYGM/s400/HPIM6834.jpg',
                   [
                       new Ingredient('Corn',3),
                       new Ingredient('Rice Floor',0.5),
                       new Ingredient('Masala Mixture',2),
                       new Ingredient('Water',1)
                   ])
    
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();//return new array with is exact copy of service file
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);
      }

}