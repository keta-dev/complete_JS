import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  // loading recipe
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    // guard clause
    if(!id) return;

    // load spinner
    recipeView.loadSpinner();
    
    //1) load recipe
    await model.loadRecipe(id);

    // 2) render the recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    alert(err);
  }
};

["hashchange", "load"].forEach(e => window.addEventListener(e, controlRecipes));