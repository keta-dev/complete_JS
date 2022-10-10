import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  }
}

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    
    const { recipe } = data.data;
    // console.log(recipe);

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