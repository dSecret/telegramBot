var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require('axios')
const token=require('./token.js').token


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.post('/new-message', function(req, res) {
  const {message} = req.body
  axios.post('https://api.telegram.org/bot'+token+'/sendMessage', {
    chat_id: message.chat.id,
    text: 'Rathore'
  })
    .then(response => {
      res.end('ok')
    })
    .catch(err => {
      res.end('Error :' + err)
    })

});
app.get('/',(req,res)=>{
  res.send("its working")
})
// Finally, start our server
app.listen(process.env.PORT||80, function() {
  console.log('Telegram app listening on port 3000!');
});
