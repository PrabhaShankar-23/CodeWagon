function alphaCheck(sentence) {
  let checklist = new Array(26).fill(false);

  sentence = sentence.toLowerCase();

  console.log(sentence);

  for (let i = 0; i < sentence.length; i++) {
    sentence[i].charCodeAt() >= 97 && sentence[i].charCodeAt() <= 122
      ? (checklist[sentence[i].charCodeAt() - 97] = true)
      : false;
  }

  let matchesInalpha = 0;
  for (let i = 0; i < 26; i++) {
    checklist[i] == true ? matchesInalpha++ : matchesInalpha;
  }

  matchesInalpha == 26
    ? console.log("All 26 letters are there!")
    : console.log(`${matchesInalpha} different alphabets are there.`);
}

alphaCheck("Hello World!");
alphaCheck("");
alphaCheck("pack my box with five dozen liquor jugs");
