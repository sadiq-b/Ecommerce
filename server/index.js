const app = require('./app');
require('dotenv').config();
require('./databaseconfig');

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
