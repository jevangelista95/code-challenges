// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//My Solution

function stringToArray(string){

    //  let stringOfWords = string.split(' ');
    //   let newArray = [];
    //   for (let i = 0; i < stringOfWords.length; i++) {
    //     newArray.push(stringOfWords[i])
    //   }
    //   return newArray;
      let stringOfWords = string.split(' ')
      return stringOfWords;
    }