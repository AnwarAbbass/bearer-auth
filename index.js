'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// Start up DB Server
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGOOSE_URI,options);

require('./src/server.js').start(process.env.PORT);
