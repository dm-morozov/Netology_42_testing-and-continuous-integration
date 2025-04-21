console.log("sortHeroes worked");

// Сортировка героев по здоровью
export default function sortHeroes(heroes) {
  return [...heroes].sort((item, nextItem) => nextItem.health - item.health); // сортировка по убыванию
}
