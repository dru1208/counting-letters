var countLetters = function (string) {
  string = string.split(" ").join("").split("");
  var answer = {};
  for (a = 0; a < string.length; a++) {
    var key = Object.keys(answer);
    if (!answer[string[a]]) {
      answer[string[a]] = 1;
    } else if (key.includes(string[a])) {
      answer[string[a]] += 1;
    }
  }
  return answer
}

console.log(countLetters("lighthouse in the house"));
