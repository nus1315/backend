const express = require('express')
const app = express()

app.get('/', function (req, res) { // Home Route
 res.send('Hello World')
})
app.get('/aboutme', function (req, res) { // Home Route
   res.send('About me')
})

app.get('/my-html', (req, res) => {
   res.send('<h1>This is about page</h1>');
});

app.get('/my-json-api3', (req, res) => {
   res.send('{"University": "PIM"}');
});

app.get('/my-json-api2', (req, res) => {
   res.json({"myJsonKey": "myJsonValue"});
});
app.get('/users', (req, res) => {
   res.json([
     {
       id: 1,
       name: 'chayanapas',
     },
     {
       id: 2,
       firstname: 'VVV',
       lastname: 'AAA'
     },
   ]);
  });

app.listen(3000, () => {
   console.log("Server started on port 3000 !")
})
