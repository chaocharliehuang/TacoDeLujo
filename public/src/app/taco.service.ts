import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TacoService {

  recipes;

  constructor(private _http: Http) { }

  retrieveRecipes(callback) {
    this._http.get('/recipes').subscribe(
      (response) => {
        this.recipes = response.json();
        callback(this.recipes);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addRecipe(recipe, callback) {
    let body = JSON.stringify(recipe);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this._http.post('/recipes', body, options).subscribe(
      (response) => {
        this.recipes = response.json();
        callback(this.recipes);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getRandomRecipe(callback) {
    this._http.get('http://taco-randomizer.herokuapp.com/random/').subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadScript() {
    document.addEventListener('DOMContentLoaded', function(){
      var wrapper = document.getElementById('wrapper');
      var topLayer = <HTMLElement>wrapper.querySelector('.top');
      var handle = <HTMLElement>wrapper.querySelector('.handle');
      var skew = 0;
      var delta = 0;

      if(wrapper.className.indexOf('skewed') != -1){
        skew = 1000;
      }
      
      wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width= e.clientX + skew + delta + 'px';
      });
    });
  }

}
