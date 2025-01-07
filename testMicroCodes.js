function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

// Used like so
// let arr = [2, 11, 37, 42];
// let arr = ['Lithuania','Guinea-Bissau','Guinea-Bissau','Saint Kitts and Nevis','Saint Kitts and Nevis','Norway','Sierra Leone','Venezuela','Venezuela','Lithuania','Norway','Sierra Leone'];
// shuffle(arr);
// console.log(arr);
let testScope = ''

const testFunc = () => {
  
  console.log(`Inside testFunc: ${testScope}`)
  const testNestedFunc = () => {
    testScope = 'Nested Func Value'
  }
  testNestedFunc()

}
testFunc()
console.log(`Outside testFunc: ${testScope}`)