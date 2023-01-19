const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require('./routes/user.js');
const permitRoutes = require('./routes/permit.js');
const accessRoutes = require('./routes/access.js');
const clientApiKeyValidation = require ('./authUtils');
const app = express();

const port = process.env.PORT;

const mongoURI = process.env.MONGODB_URI;

//middleware
app.use(clientApiKeyValidation);
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', permitRoutes);
app.use('/api', accessRoutes);


//rutas
app.get('/', (request, response) =>{
    response.send('placeholder');
})

//mongodb atlas connection
mongoose.connect(mongoURI)
.then(() => console.log('conexion exitosa a mongodb atlas'))
.catch((e) => console.log(e));

app.listen(port, ()=> console.log('Server listening at port:', port))