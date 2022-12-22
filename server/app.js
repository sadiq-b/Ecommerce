const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user');
const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use('/users', userRouter);
app.get('/', (req, res) => {
  res.send('Hello World');
});
module.exports = app;
