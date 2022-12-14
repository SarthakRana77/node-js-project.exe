const fs = require('fs');
  
// a. Asynchronous function:
  fs.readFile('file.txt', 'utf8', (err,data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data,"Async");
});
  
// b. Synchronous funtion:
var data = fs.readFileSync('file.txt','utf8');
console.log(data,"Sync");