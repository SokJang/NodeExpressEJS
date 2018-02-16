const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data = require('./data/press.json');

// settings port, data, template engine
app.set('port', process.env.PORT || 3000 );
app.set('appData', data);
app.set('view engine', 'ejs');

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// use static assets
app.use(express.static('public'));

// use routes defined in modules
app.use(require('./routes/index'));
app.use(require('./routes/presslocal'));
app.use(require('./routes/pressglobal'));
app.use(require('./routes/drinks'));

// server
app.listen(app.get('port'));