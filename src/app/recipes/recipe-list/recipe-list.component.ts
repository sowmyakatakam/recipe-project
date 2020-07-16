import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is Just a Test', 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2017/11/29/nestle-hit-by-new-maggi-noodle-setback-in-india/7591781-1-eng-GB/Nestle-hit-by-new-Maggi-noodle-setback-in-India_wrbm_large.jpg'),
    new Recipe('A Test Recipe', 'This is Just a Test', 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2017/11/29/nestle-hit-by-new-maggi-noodle-setback-in-india/7591781-1-eng-GB/Nestle-hit-by-new-Maggi-noodle-setback-in-India_wrbm_large.jpg'),
    new Recipe('Corn Crisps','Use cornflor Batter','https://1.bp.blogspot.com/_hkjOnjdDygU/SPjCOI9iyvI/AAAAAAAADek/_UE9XOXtYGM/s400/HPIM6834.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
