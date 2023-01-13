// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  let txt = str.split(" ");
  let finalText = "#";

  txt.forEach((element) => {
    finalText += element.charAt(0).toUpperCase() + element.slice(1);
  });

  if (
    finalText.length > 140 ||
    finalText == " " ||
    finalText == "" ||
    finalText == "#"
  ) {
    return false;
  } else {
    return finalText;
  }
}

generateHashtag("Do We have A Hashtag");
