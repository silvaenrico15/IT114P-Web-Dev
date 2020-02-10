const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();

app.set('view engine', 'ejs');

const playerData = require('./routes/admin');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/font', express.static(path.join(__dirname, 'node_modules/@mdi/font')));
app.use(playerData.routes);
app.use((req, res, next) => {
  res.status(404).render('404',
    {
      pageTitle: '404 - Page Not Found',
      path: ""
    });
});

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}/home/page`));
