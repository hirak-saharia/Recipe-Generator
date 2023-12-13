const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log('Test'); // check if the percel set is working in dev console

// make first api call - Get recipe/Delete recipe

// create a function to use aysnc and await
const showRecipe = async function () {
  try {
    const res = await fetch(
      // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcfcc`
    );
    // convert the result to json
    const data = await res.json();

    // create error message when there is a wrong id in api call
    // error as alert window
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // console.log(res, data);

    // reformat underscroe variables with better variable names
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      image: recipe.imgae_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};

showRecipe();
