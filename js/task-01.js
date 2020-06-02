const categoryCount = document.querySelectorAll('.item');
console.log(`В списке ${categoryCount.length} категории`);

const categoriesUl = Array.from(
  document.querySelectorAll('ul#categories>li.item'),
);
const categoriesLi = Array.from(
  document.querySelectorAll('ul#categories>li.item>ul'),
);
const titles = categoriesUl.map(elem => elem.children[0].textContent);
const liCount = categoriesLi.map(elem => elem.children.length);

function categoryInfo(titles, lists) {
  for (let i = 0; i < titles.length; i += 1) {
    console.log(`Категория: ${titles[i]}
Колличество элементов ${lists[i]}`);
  }
}

categoryInfo(titles, liCount);
