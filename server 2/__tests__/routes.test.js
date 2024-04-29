// __tests__/routes.test.js

const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

// Import User model and controllers
const User = require('../models/UserModel');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');

const app = express();

// MongoDB connection setup
beforeAll(async () => {
    const mongoDBUrl = "mongodb+srv://chandrasaiteja0804:Saiteja2004@cluster0.rigxvju.mongodb.net/";

    await mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
}, 30000); // Increase timeout to 30 seconds

// Session setup
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());

// Routes setup
app.post("/signup", registerUser);
app.post("/login", loginUser);
app.get("/logout", logoutUser);

// Testing user routes
describe('User Routes', () => {
  let testUser;

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        signupname: 'Test User',
        signupemail: 'test@example.com',
        signuppass: 'Test123@',
        phonenumber: '1234567890',
        securityquestion: 'Security Question',
        securityanswer: 'Security Answer'
      });

    expect(response.statusCode).toBe(200);

    // Check if user is saved in the database
    testUser = await User.findOne({ email: 'test@example.com' });
    expect(testUser).toBeTruthy();
  });

  it('should log in a user', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'Test123@'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toBe('test@example.com');
    expect(response.body.password).toBeUndefined(); // Password should not be sent in the response
  });

  it('should log out a user', async () => {
    const response = await request(app)
      .get('/logout');

    expect(response.statusCode).toBe(200);
  });

  // Clean up after tests
  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  }, 30000); // Increase timeout to 30 seconds
});
