var app = require('express')();

console.log('RUNNING:EXPRESS');

app.get('/', function(req, res, next){
  console.log('GET: /');
  res.send('HELLO WORLD!');
});

app.listen(3002, function(){
  console.log('HELLO WORLD!');
});
