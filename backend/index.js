const express = require('express');
const cors = require('cors');
const app = express();

require('./mongo');
const MoviesRouter = require('./routes/movie');

app.use(express.json());
app.use(cors());

app.use('/movies', MoviesRouter);

app.listen(8080, function () {
  console.log('> Server listening port 8080');
});
