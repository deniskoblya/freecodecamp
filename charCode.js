function arr(x) {
  let newArr = [];
  let score = 0;
  x.split(" ").forEach((item) => {
    item.split("").forEach((letter) => {
      score += letter.toLowerCase().charCodeAt(0) - 96;
    });

    console.log(score + " - " + item);
    newArr[score] = item;
    score = 0;
  });

  console.log(newArr);
  console.log(newArr[newArr.length - 1]);
}

arr("bb d");

// !решить проблему выборки первого слова если значения одинаковы
