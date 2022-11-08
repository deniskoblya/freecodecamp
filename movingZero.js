// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function move(n) {
  let zeroArr = [];
  let newArr = [];
  n.forEach((element) => {
    if (element !== 0) {
      newArr.push(element);
    } else {
      zeroArr.push(element);
    }
  });

  console.log(newArr.concat(zeroArr));
}

move([2, 3, 1, 0, 1, 0, 1, 0, 0, 1]);
