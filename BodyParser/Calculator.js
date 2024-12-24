// npx nodemon calculator.js
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
   res.sendFile(__dirname +'/index.html');
} );
app.post("/", (req, res)=>{
   console.log(req.body); //js object
   console.log(req.body.num1);
   console.log(req.body.num2);
   var result = Number(req.body.num1) + Number(req.body.num2);
   res.send("sum is " + result);
} );
app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});
