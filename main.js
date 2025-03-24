const express = require('express');
const app = express();

app.use('/',express.static(__dirname))

app.listen(3000, () => {
  console.log('call');
});

app.get('/', (req, res) => {
  console.log('===>루트요청 들어옴');
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/about', (req, res) => {
  console.log('a===>bout요청');
  res.sendFile(__dirname + '/pages/about.html');
});

app.get('/working', (req, res) => {
  console.log('===>working요청');
  res.sendFile(__dirname + '/pages/working.html');
  
  console.log('===>working요청2');
});

app.get('',(re1,res)=>{
  console.log('')
})
