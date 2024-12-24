const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// เปลี่ยนจาก 'application' เป็น 'app'
app.get('/bmiCalculator', function(req, res){
   res.sendFile(__dirname + '/public/bmiCalculator.html');
});
app.post('/bmiCalculator', function(req, res){
   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);
   var bmi = weight / (height * height);
   
   var weightCategory = '';
   if (bmi < 18.5) {
      weightCategory = 'Underweight';
   } else if (bmi >= 18.5 && bmi < 24.9) {
      weightCategory = 'Normal weight';
   } else if (bmi >= 25 && bmi < 29.9) {
      weightCategory = 'Overweight';
   } else {
      weightCategory = 'Obese';
   }

   // ส่งผลลัพธ์กลับไปที่ผู้ใช้
   res.send(`Your BMI is ${bmi.toFixed(2)}. You are classified as: ${weightCategory}`);
});


app.post("/", (req, res)=>{
   console.log(req.body); // js object
   var weight = parseFloat(req.body.weight);
   var result = Number(req.body.num1) + Number(req.body.num2);
   res.send("sum is " + result);
});

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});
