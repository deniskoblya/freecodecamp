// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

function squares(x, n) {
  let arr = new Array();
  if (n <= 0) {
    return (arr = []);
  } else {
    arr = [x];

    for (let i = 2; i <= n; i++) {
      arr.push(Math.pow(arr[arr.length - 1], 2));
    }
    return arr;
  }
}
