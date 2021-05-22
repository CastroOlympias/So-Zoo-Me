const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

// parse the incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// allow assets to become readily available to prevent making route for each asset
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);







app.listen(PORT, () => {
  console.log(`API server now on port 3001!`);
});


//   http://localhost:3001/
// or in this case http://localhost:3001/api/animals
// or http://localhost:3001/api/animals?personalityTraits=hungry&personalityTraits=zany