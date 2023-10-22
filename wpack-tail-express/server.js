const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const port = 3000;

app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => {
  console.log('http://localhost:3000');
  console.log(`Example app listening on port ${port}`);
});
