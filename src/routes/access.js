const express = require("express");
const accessSchema = require("../models/access");

const router = express.Router();

//create access 
router.post('/accesses', (request, response) => {
    const access = accessSchema(request.body);
    access.save()
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

//Get last access
router.get('/accesses', (request, response) => {
    
    accessSchema
    .find()
    .limit(1)
    .sort({ timeStamp: -1 })
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

//Delete access from user N
router.delete('/accesses/:userId', (request, response) => {
    const { userId } = request.params;
    accessSchema    
    .deleteOne({ userId: userId })
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });
 //se asume que los accesos no son editables 

module.exports = router;