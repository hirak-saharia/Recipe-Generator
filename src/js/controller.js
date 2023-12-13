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
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    // convert the result to json
    const data = await res.json();

    console.log(res, data);
  } catch (err) {}
};

showRecipe();
