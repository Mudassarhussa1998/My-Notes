const connectToMongo = require('./db');
const express = require('express')
// Connect to MongoDB
connectToMongo();

// Your application logic here

const app = express()
const port = 4000
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`)
})