const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

function createListItems(items) {
  const listsArr = items.map(item => {
    const listElem = document.createElement('li');
    listElem.textContent = item;
    return listElem;
  });
  return listsArr;
}

const listsItems = createListItems(ingredients);

ingredientsListRef.append(...listsItems);

