const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector('#ingredients')
function createVegetablesList(arrayOfVegetables) {
  const arr = []
     arrayOfVegetables.map(vegetable => {
    const vegetableListRef = document.createElement('li');
    vegetableListRef.classList.add('.item');
    vegetableListRef.textContent = vegetable;
    arr.push(vegetableListRef)
     })
  ulRef.append(...arr)
}
createVegetablesList(ingredients)
