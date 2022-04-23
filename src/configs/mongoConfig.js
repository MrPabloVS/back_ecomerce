require("dotenv").config()
const mongoose = require("mongoose");
//import knex from 'knex'


//dotenv.config()

const db =mongoose.connect("mongodb+srv://pepe:asd123@cluster0.ieeft.mongodb.net/coderhouse?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log('Error al Conectarse a MongoDB');
    } else {
        console.log('Conectados a MongoDB')
    }});

module.exports = db;