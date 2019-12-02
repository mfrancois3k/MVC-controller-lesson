
  // this the variable for all t he packages install an the urls 
const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express'),
      port = process.env.PORT || 8000;

// this is path way using mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html'); // this the templete engine
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

const monsters = require('./controllers/monsters');
app.use('/monsters', monsters);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

