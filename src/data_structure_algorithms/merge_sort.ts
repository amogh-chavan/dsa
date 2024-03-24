const nums = [5, 32, 12, 4, 8, 2, 8];

function mergeSort(arr: number[]) {
  //base case

  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left_arr = arr.slice(0, mid);
  const right_arr = arr.slice(mid);

  return merge(mergeSort(left_arr), mergeSort(right_arr));
}

function merge(left: number[], right: number[]) {
  const sorted_arr: number[] = [];

  let i = 0,
    j = 0,
    k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted_arr[k] = left[i];
      i++;
    } else {
      sorted_arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    sorted_arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    sorted_arr[k] = right[j];
    j++;
    k++;
  }

  return sorted_arr;
}

console.log("merge sort: ", mergeSort(nums));
