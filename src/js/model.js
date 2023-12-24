import { async } from 'regenerator-runtime';
// exporting state from here - exported for using in controller.js
export const state = {
  recipe: {}, // empty object at the begining
};

// load recipe - fecthing recipe data from forkify api
export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    // convert the result to json
    const data = await res.json();

    // create error message when there is a wrong id in api call
    // error as alert window
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // console.log(res, data);

    // reformat underscroe variables with better variable names
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      source_url: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};