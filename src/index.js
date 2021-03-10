const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//HTTP Logger
app.use(morgan('combined'));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => console.log(`Run : http://localhost:${port}`));
