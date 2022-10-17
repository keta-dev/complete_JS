import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';

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

    // 3) Updating bookmarks view
    bookmarkView.update(model.state.bookmarks);

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
};

const controlAddBookmark = function() {
  // 1) Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarkView.render(model.state.bookmarks)
};

const controlBookmarks = function () {
  bookmarkView.render(model.state.bookmarks);
};

const init = function () {
  bookmarkView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRenderRecipe(controlRecipes);
  recipeView.addHandlerUpdateServing(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.paginationHandler(controlPagination);
}
init();
