function generateHashtag(str) {
  let txt = str.split(" ");
  let finalText = "";

  txt.forEach((element) => {
    finalText += element.charAt(0).toUpperCase() + element.slice(1);
  });

  if (finalText.length >= 140 || finalText == " ") {
    return false;
  } else {
    return "#" + finalText;
  }
}

generateHashtag("Do We have A Hashtag");
