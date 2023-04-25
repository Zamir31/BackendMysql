require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/producto', require('./routes/productos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on port " + PORT));