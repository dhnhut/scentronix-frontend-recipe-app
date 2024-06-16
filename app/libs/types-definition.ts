export type Recipe = {
  id: string;
  name: string;
  quick_description: string;
  description: string;
  preparation_time: string;
  bake_time: string;
  total_time: string;
  image_url: string;
};

export type RecipeCategory = {
  id: string;
  name: string;
};