// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, runThisAfter) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    console.log("In readFile's Callback: it has the data.");
    if (!error) runThisAfter(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printCat = (breed) => {
  console.log('Return Value: ', breed); // => will NOT print out details, instead we will see undefined!
}
// we try to get the return value
breedDetailsFromFile('Bombay', printCat);


