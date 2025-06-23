require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const connectDB = require('./config/db');

// importing routes
const blogRoutes = require('./routes/blog.routes');

// cors option object
const options = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: 'GET,PATCH,PUT,POST,HEAD,DELETE',
    credentials: true,
    AccessControlAllowOrigin: true,
    optionsSuccessStatus: 200
}

// middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(options));
app.use(cookieparser());

// connect to database
connectDB();

// routes middleware
app.use('/api/v1/blogs', blogRoutes);


// initial route to check database
app.get('/', (req, res) => {
    res.send('Welcome to our blog site');
});


// listening to port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
})