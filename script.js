const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  
  console.time('funchallenge');
  let floor = 0;
  let pos = 0;
  
  if (err) {
    console.log('errrrrrooooooorrr');
  }
  else {
    let i = 0;
    let firstMatch = true;
    const len = data.length;

    for(i = 0; i < len; i++) {
      if (data[i] == 40)
        floor++;
      else
        floor--;

      if (firstMatch && (floor == -1)) {
        pos = i + 1;
        firstMatch = false;
      }
    }
  }
  console.timeEnd('funchallenge');

  console.log("Floor:" + floor);
  console.log("Santa to first enter the basement character:" + pos);
})