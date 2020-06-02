const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

function createListElem(number) {
  const listElem = document.createElement('li');
  listElem.textContent = ingredients[number];
  return listElem;
}

ingredientsListRef.append(
  createListElem(0),
  createListElem(1),
  createListElem(2),
  createListElem(3),
  createListElem(4),
  createListElem(5),
);
