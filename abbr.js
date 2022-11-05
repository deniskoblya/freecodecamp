let name = "sam Harris";

let finalName = "";
name.split(" ").forEach((item, i) => {
  finalName += item.split("")[0].toUpperCase();
  if (i == 0) {
    finalName += ".";
  }
});

console.log(finalName);
