import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  }
}

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_Url,
      servings: recipe.servings,
      img: recipe.image_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
}

// the controller calls this function
export const loadSearchRecipe = async function (query) {
  try{
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {  //returns a new [] with a new {}
      return {
        id: rec.id,
        title: rec.title,
        img: rec.image_url,
        publisher: rec.publisher,
      }
    });
  } catch (err) {
    console.log(`${err} 💥 💥 💥`);
    throw err;
  }
}

loadSearchRecipe('pizza');

export const searchPagination = function(page = state.search.page) {
  state.search.page = page;
  
  const start = (page - 1) * state.search.resultPerPage // 0
  const end = page * state.search.resultPerPage // 10

  return state.search.results.slice(start, end);
};

export const updateServings = function(newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
  });

  state.recipe.servings = newServings;
};
