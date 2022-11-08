// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function thisUpperCase(n) {
  let txt = "";
  n.split("").forEach((element) => {
    if (element === element.toUpperCase()) {
      txt += " " + element;
    } else {
      txt += element;
    }
  });
  console.log(txt);
}

thisUpperCase("camelCase");
