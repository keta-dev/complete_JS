import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {  // from parcel
  module.hot.accept();
}

const controlRecipes = async function () {
  // loading recipe
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;  // guard clause
    recipeView.loadSpinner();  // load spinner
    
    //1) load recipe
    await model.loadRecipe(id);

    // 2) render the recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {  //calls loadSearchRecipe
  try {
    resultView.loadSpinner();
    
    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    await model.loadSearchRecipe(query);

    // 3) Render results
    resultView.render(model.state.search.results);
  } catch (err) {
    console.log(err)
  };
};

const init = function () {
  recipeView.addHandlerRenderRecipe(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();
