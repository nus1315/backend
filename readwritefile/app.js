const express = require('express')
const app = express()

let fs = require('fs');

fs.writeFile('demofile1.txt', 'utf8', (err, data) => {
    if(err) {
        console.log("cant write file");
    } else {
        console.log("write file 1 success")} 
    });

  fs.readFile('demofile1.txt', 'utf8', (err, data) => {
    console.log(data);
  });
  
fs.writeFile('demofile2.txt', 'file2 content', 'utf8', function (err) {
    console.log("write file 2 success")
    fs.readFile('demofile2.txt', 'utf8', function (err, data) {
        console.log("read file 2", data);
    });
});

app.listen(3000, () => {
   console.log("Server started on port 3000 !")
    
});
