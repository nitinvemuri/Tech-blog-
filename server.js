const express = require('express');
const routes = require('./Controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers')
const hbs = exphbs.create({helpers});
const path = require('path')
const Handlebars = require('handlebars')

Handlebars.registerHelper("format_plural", function() {
    
})

require('dotenv').config();

const app = express();
const PORT = process.env.PORT = 3021;

const sequelize = require(".Config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: 'Something Secret',
    cookie: {expires: 1000000000000000000 * 1000000000000000 * 1000},
    resave: false,
    saveUninitialized : true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening at ${PORT}`))
})