// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
// (["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")

function longestConsec(strarr, k) {
  var n = strarr.length,
    str = "";

  if ((n = 0 || k > n || k <= 0)) {
    return str;
  }

  for (var i = 0; i < strarr.length; i++) {
    var currentStr = strarr.slice(i, k + i).join("");
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }
  console.log(str);
}

longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3);
