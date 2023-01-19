const express = require("express");
const user = require("../models/user");
const userSchema = require("../models/user");

const router = express.Router();

//create user 
router.post('/users', (request, response) => {
    const user = userSchema(request.body);
    
    user.save()
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });
//Get users

router.get('/users', (request, response) => {
    
    userSchema
    .find()
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

//Get user N

router.get('/users/:userId', (request, response) => {
    
    const { userId } = request.params;
    userSchema
    .find({userId: userId})
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

 //Update user N

router.put('/users/:userId', (request, response) => {
    const { userId } = request.params;
    const { name, age, email} = request.body;
    userSchema
    .updateOne({ userId: userId }, {$set: {name, age, email}})
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

//Delete user N
router.delete('/users/:userId', (request, response) => {
    const { userId } = request.params;
    userSchema
    .deleteOne({ userId: userId })
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });
module.exports = router;