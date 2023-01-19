const express = require("express");
const permitSchema = require("../models/permit");
const userSchema = require("../models/user");

const router = express.Router();

//create permit - verifica que exista el usuario al que se le asignaran los permisos
router.post('/permits', async (request, response) => {
    const permit = permitSchema(request.body);
    const userExists = await userSchema.exists({userId: permit.userId}) 
    const permitExists = await permitSchema.exists({userId: permit.userId}) 
    if(permitExists != null){
        response.json({ message: 'permits already granted' })
    } else{
        if(userExists != null){
            permit.save()
            .then((data) => response.json(data))
            .catch((error) => response.json({ message: error }));
        }else{
            response.json({ message: 'no user found' })
        }
    }


 });

//Get permits
router.get('/permits', (request, response) => { 
    permitSchema
    .find({},['userId','permit'])
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

//Get permit N

router.get('/permits/:userId', (request, response) => {
    const { userId } = request.params;
    permitSchema
    .find({userId: userId})
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

 //Update permit N

router.put('/permits/:userId', (request, response) => {
    const { userId } = request.params;
    const { permit} = request.body;
    permitSchema
    .updateOne({ userId: userId }, {$set: {permit}})
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });

//Delete permit N
router.delete('/permits/:userId', (request, response) => {
    const { userId } = request.params;
    permitSchema
    .deleteOne({ userId: userId })
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
 });
module.exports = router;