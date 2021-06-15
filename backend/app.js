const express = require ('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');


// const commentRoutes = require('./routes/comment');
// const likeRoutes = require('./routes/like');
// const messageRoutes = require('./routes/message');


const userRoutes = require('./routes/user');


const app = express();

app.use((req, res) => {
    res.json({ message: 'votre message à bien été reçu' })
})
module.exports = app;


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(helmet());

// app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use('/api/messages', commentRoutes);
// app.use('/api/messages', likeRoutes);
// app.use('/api/messages', messageRoutes);


app.use('/api/users', userRoutes);
module.exports = app;