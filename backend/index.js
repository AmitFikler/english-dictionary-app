require('dotenv').config();
const express = require('express');
const cors = require('cors');

const wordRouter = require('./routers/word');
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('server is up!');
});

app.use('/word', wordRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
