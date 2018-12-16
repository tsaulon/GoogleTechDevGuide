let str = "abppplee";
let words = ["able", "ale", "apple", "bale", "kangaroo", "peel", "leap"];

//  find longest subsequence inside D using sequence S
function foo(S, D) {
  
  try {
    //  sort descending and iterate through each word inside D 
    D.sort((a, b) => b.length - a.length).forEach(word => {

      //  flag subtractions
      let seq = S.split('');
      let tmpWord = word.split('');

      //  iterate through each letter inside word
      word.split('').forEach((letter, index) => {
        if (seq.includes(letter)) {
          seq.splice(0, seq.indexOf(letter)); //  remove letters 0 up to index
          tmpWord.splice(tmpWord.indexOf(letter), 1); //  remove letter from tmpWord
        }
      })

      //  throw longestSequence
      if (tmpWord.length === 0) {
        throw word;
      }
    });
  } catch (word) {
    return word;
  }

  return null;
}

console.log(foo(str, words));