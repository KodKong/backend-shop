require("dotenv").config(); 

const express = require('express'); 
const sequelize = require('./db');
const models = require('./models/models'); 
const cors = require('cors'); 
const fileupload = require('express-fileupload');
const router = require('./routes/index');
const errorHandle = require('./middleware/ErrorHandingmiddleware'); 
const path = require('path'); 

const PORT = process.env.PORT || 5000;  

const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use('/api', router); 
app.use(errorHandle); 
app.use(fileupload({})); 
app.use(express.static(path.resolve(__dirname, 'static'))); 

app.get('/', (req, res) => {
    res.status(200).json({message: "WORK"}); 
})
 
const start = async () => {

    try {
        await sequelize.authenticate(); 
        await sequelize.sync(); // сверяет бд со схемой бд
        app.listen(PORT, () => console.log(`Started on port ${PORT}`));         
    } catch (e) {
        console.log(e); 
    }

}

start();


