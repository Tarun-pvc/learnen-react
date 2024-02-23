const mongoose = require('mongoose')
const express = require('express')
const Routes = require('./routes/Route')
const session = require('express-session');
const cors = require('cors');
const app = express();
const compression = require("compression")
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
var csrf = require('csurf');
const paymentRoutes = require('./routes/payment')

app.use(cors());
app.use(compression());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads'));

require('dotenv').config();

const mongoDBUrl = process.env.MONGO_URL;

mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const generateLogFileName = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return path.join(__dirname, 'logs', `${year}-${month}-${day}.log`);
};

const logsDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

const accessLogStream = fs.createWriteStream(generateLogFileName(), { flags: 'a' });
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: accessLogStream }));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 },
  store: new session.MemoryStore()
}));

app.use('/api', Routes);
app.use((error, req, res, next) => {
  console.log("this is error handling middleware ");
  console.error("Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
});

app.use(cookieParser());
const csrfProtection = csrf({
    httpOnly: true,
    cookie: true,
    expiresIn: 30 * 60 * 1000
});

app.get('/api/getCSRFToken',csrfProtection, (req, res) => {
    try {
        console.log(req.csrfToken());
        res.json({ CSRFToken: req.csrfToken() });

    } catch (error) {
        console.error("Error in getCSRFToken:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.use('/api/payment', paymentRoutes);


app.listen(3000, () => {
  console.log('server running at port 3000');
})