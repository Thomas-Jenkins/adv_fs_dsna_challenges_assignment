
function titleCase(sentence) {
  const sentenceArray = [];
  for (const letter of sentence) {
    sentenceArray.push(letter);
  }
  for (let i = 0; i < sentenceArray.length; ++i) {
    if (sentenceArray[i - 1] === ' ' || null) {
      if (sentenceArray[i].charCodeAt() > 96) {
        console.log('hello');
        sentenceArray[i] = sentenceArray[i].charCodeAt() - 32;
      }
    }
  }
  
  return sentenceArray;
}

console.log(titleCase('alchemy ROCKS goLD'));
