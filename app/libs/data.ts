import { Recipe, RecipeCategory } from "./types-definition";

import { recipes } from "./fake-data";

const mockApiCall = async (data: any) => {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(data);
    }, 500);
  });
  return await promise;
};

export const fetchRecipes = async (): Promise<Recipe[]> => {
  let promise = new Promise<Recipe[]>(function (resolve) {
    setTimeout(function () {
      resolve(recipes);
    }, 500);
  });
  return await promise;
};

export const fetchRecipeDetail = async (id: string): Promise<Recipe> => {
  let promise = new Promise<Recipe>(function (resolve) {
    setTimeout(function () {
      const recipe = recipes.find((r) => r.id === id);
      if (!recipe) throw new Error();
      resolve(recipe);
    }, 500);
  });
  return await promise;
};
