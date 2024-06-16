import { faker } from '@faker-js/faker';

import {
  Recipe,
} from './types-definition';

let currentId = 0;
const incrementId = () => {
  currentId += 1
  return currentId
}

const createRandomRecipe = ():Recipe => {
  return {
    id: incrementId().toString(),
    name: faker.internet.userName(),
    quick_description: faker.lorem.paragraph(),
    description: faker.lorem.paragraphs(5),
    preparation_time: `${faker.number.int({ min: 5, max: 60 })} mins`,
    bake_time: `${faker.number.int({ min: 0.5, max: 2 })} hr ${faker.number.int({ min: 5, max: 60 })} mins`,
    total_time: `${faker.number.int({ min: 0.5, max: 2 })} hr ${faker.number.int({ min: 5, max: 60 })} mins`,
    image_url: `/recipe_${faker.number.int({ min: 1, max: 7 })}.webp`,
  };
}

// Data will be changed every rebuild
export const recipes = faker.helpers.multiple(createRandomRecipe, {
  count: 25,
});