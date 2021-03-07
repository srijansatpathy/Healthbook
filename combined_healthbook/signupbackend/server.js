const express = require('express');

const connectDB = require('./config/db');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

dotenv.config({path: './config/config.env'});

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server running in ${process.env.DATABASE_ACCESS_KEVIN} mode on port ${PORT}`));