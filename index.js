const express = require('express');
const cors = require('cors');
const db = require('./app/models');
require('dotenv').config();

const PORT = process.env.APP_PORT;
const app = express();

db.sequelize.sync();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Flat costs api');
});

require('./app/routes/category.routes')(app);
require('./app/routes/cost.routes')(app);
require('./app/routes/config.routes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
