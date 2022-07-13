const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/names', (req, res) => {
  res.send("Rima");
})

app.listen(9000, () => {
  console.log(path.join(__dirname, 'build'));
  console.log("Server is running on port 9000");
})