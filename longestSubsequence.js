let str = "abppplee";
let words = ["able", "ale", "apple", "bale", "kangaroo", "peel", "leap"];

//  find longest subsequence inside D using sequence S
function foo(S, D) {

  let longestSubsequence = '';

  //  iterate through each word inside D
  D.forEach(word => {

    //  flag subtractions
    let seq = S.split('');
    let tmpWord = word.split('');

    //  iterate through each letter inside word
    word.split('').forEach((letter, index, array) => {
      if (seq.includes(letter)) {
        seq.splice(0, seq.indexOf(letter)); //  remove letters 0 up to index
        tmpWord.splice(tmpWord.indexOf(letter), 1); //  remove letter from tmpWord
      }

      //  set longestSubsequence if all letters from tmpWord can be subtracted from seq
      //  and the subsequence is longer than longestSubsequence
      if (tmpWord.length === 0 && word.length > longestSubsequence.length) {
        longestSubsequence = word;
      }
    })
  })

  return longestSubsequence;
}

console.log(foo(str, words));