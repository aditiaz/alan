import { useState } from 'react';

let arrSet = [];
function addFood(food, price) {
  for (let item of arrSet) {
    if (item.makanan === food && item.harga === price) {
      return;
    }
  }

  return arrSet.push({ makanan: food, harga: price, clicks: 0 });
}
function addClick(i) {
  return (arrSet[i].clicks += 1);
}

const allFoods = [
  { makanan: 'soto', harga: 5000 },
  { makanan: 'bakso', harga: 5000 },
  { makanan: 'nasi goreng', harga: 5000 },
  { makanan: 'mie', harga: 5000 },
];
addFood(allFoods[1].makanan, allFoods[1].harga);
addFood(allFoods[1].makanan, allFoods[1].harga);
addFood(allFoods[0].makanan, allFoods[0].harga);

addClick(0);
addClick(0);
addClick(1);

console.log(arrSet);
