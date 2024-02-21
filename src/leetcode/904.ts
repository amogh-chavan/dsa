function totalFruit(fruits: number[]): number {
  let fruit_map = new Map();

  let max_fruit_trees = 0;
  let start = 0;

  for (let end = 0; end < fruits.length; end++) {
    if (fruit_map.has(fruits[end])) {
      //we are already collection this type of fruit so simply update count
      max_fruit_trees = Math.max(max_fruit_trees, end - start + 1);
    } else if (fruit_map.size < 2 && !fruit_map.has(fruits[end])) {
      // we dont have this type of fruit and one basket is empty to store new fruit
      fruit_map.set(fruits[end], 0);
      max_fruit_trees = Math.max(max_fruit_trees, end - start + 1);
    } else {
      // we have reached a point from where we can add current fruit and current - 1 fruit tree to basket
      fruit_map = new Map();
      fruit_map.set(fruits[end - 1], 0);
      fruit_map.set(fruits[end], 0);

      start = end - 1;

      while (fruits[start] === fruits[start - 1]) {
        start -= 1;
      }

      max_fruit_trees = Math.max(max_fruit_trees, end - start + 1);
    }
  }

  return max_fruit_trees;
}
