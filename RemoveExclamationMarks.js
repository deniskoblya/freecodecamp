let txt = "Привет как! тебя зовут! !! ! ага вот так!";
let finaltxt = "";

txt.split("").forEach((item) => {
  if (item !== "!") {
    finaltxt += item;
  }
});

console.log(finaltxt);
