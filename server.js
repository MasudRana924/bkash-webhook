const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
require('./config/connection');
const app = express();
const routes=require('./routes/webhook.route');
app.use(cors());
require('dotenv/config');
app.use(body_parser.json())
app.use('/api',routes )
const port = process.env.PORT
app.get('/', (req, res) => res.send('server is running'))
app.listen(port, () => console.log(`bKash webhook listening on port ${port}!`))