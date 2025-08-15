const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory user store
let users = [];

// Secret key for signing JWT
const SECRET_KEY = 'mysecretkey';

// Register Route
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
    }

    // Check if user exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Save user
    users.push({ username, password });
    res.json({ message: 'User registered successfully' });
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check user
    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign({username }, SECRET_KEY, { expiresIn: '1h' });
 
    res.json({ token });
});

// Protected Route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, you have access!` });
});

// Middleware to verify token
function verifyToken(req, res, next) {
    const authHeader = req.headers[ 'authorization' ];
    const token = authHeader && authHeader.split(' ')[ 1 ]; // Bearer token

    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
