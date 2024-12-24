const express = require('express')
const app = express()

app.get('/read-users', (req, res) => {
  const responseData = {
    "info": "//20221121110025",
    "url": "//http:readwritefile/read-users",
    "users": [
      {
        id: 1,
        name: 'chayanapas',
      },
      {
        id: 2,
        firstname: 'VVV',
        lastname: 'AAA'
      },
    ]
  };

  // ใช้ JSON.stringify() กับพารามิเตอร์ที่กำหนดระยะห่าง (indentation)
  res.json(JSON.parse(JSON.stringify(responseData, null, 2)));  // '2' หมายถึงการเว้นบรรทัด 2 ตัวอักษร
});
app.listen(3000, () => {
  console.log("Server started on port 3000 !")
})
