import { Component, OnInit } from '@angular/core';

import { TacoService } from '../taco.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  recipes;

  recipe = {
    author: '',
    text: ''
  }

  constructor(private _tacoService: TacoService) {
    this._tacoService.retrieveRecipes((recipes) => {
      this.recipes = recipes;
    });
  }

  getRandomRecipe() {
    this._tacoService.getRandomRecipe((recipe) => {
      let newRecipe = recipe.base_layer.name + ' with ';
      newRecipe += recipe.mixin.name + ', garnished with ';
      newRecipe += recipe.condiment.name + ' topped off with ';
      newRecipe += recipe.seasoning.name + ' and wrapped in delicious ';
      newRecipe += recipe.shell.name;
      this.recipe.text = newRecipe;
    });
  }

  onSubmit() {
    this._tacoService.addRecipe(this.recipe, (recipes) => {
      this.recipes = recipes;
      this.recipe = {
        author: '',
        text: ''
      }
    });
  }

  ngOnInit() {
  }

}
