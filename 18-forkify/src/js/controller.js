import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if (module.hot) {  // from parcel
//   module.hot.accept();
// }

const controlRecipes = async function () {
  // loading recipe
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;  // guard clause
    recipeView.loadSpinner();  // load spinner

    // 0) Update results view
    resultView.update(model.searchPagination());
    
    //1) load recipe
    await model.loadRecipe(id);

    // 2) render the recipe
    recipeView.render(model.state.recipe);

    // TEST
    // controlServings();

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
    // resultView.render(model.state.search.results);
    resultView.render(model.searchPagination());

    // 4) Render pagination results
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err)
  };
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultView.render(model.searchPagination(goToPage));

  // 2) Render NEW pagination results
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const init = function () {
  recipeView.addHandlerRenderRecipe(controlRecipes);
  recipeView.addHandlerUpdateServing(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.paginationHandler(controlPagination);
}
init();
