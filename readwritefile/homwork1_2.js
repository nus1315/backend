const express = require('express')
const app = express()


app.get('/aboutme', function (req, res) { // Home Route
    res.send('This is about page')
 })

 app.get('/my-json-api3', (req, res) => {
    res.send('{"University": "PIM"}');
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

app.use((req, res, next) => {
    res.status(404).send({
        error: '404 Not Found',
    message : 'Page not found',
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000 !")
 })
 
