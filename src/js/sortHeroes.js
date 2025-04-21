console.log("sortHeroes worked");

export default function sortHeroes(heroes) {
  return [...heroes].sort((item, nextItem) => nextItem.health - item.health); // сортировка по убыванию
}
