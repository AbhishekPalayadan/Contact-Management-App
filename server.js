const express=require('express');
const dotenv=require('dotenv').config();
const contactRoutes=require('./routes/contactRoutes');
const {errorHandler}=require('./middleware/errorHandler');
const { error } = require('console');
const app=express();

const port=process.env.PORT || 5000;

app.use(express.json())

app.use('/api/contacts',contactRoutes);

app.use(errorHandler);

app.listen(3000,()=>{
    console.log(`Server is running of ${port}`)
})