const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));
const port = 8081;
const messCon = require( __dirname + '/controllers/messages_controller');

app.post('/api/messages', messCon.create);
app.get('/api/messages', messCon.read);
app.put('/api/messages/:id', messCon.update);
app.delete('/api/messages/:id', messCon.delete);





app.listen(port, ()=> {
    console.log(`I am listening on ${port}`)
}) 