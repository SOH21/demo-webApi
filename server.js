import express from "express";
import config from "./config/config.js";
import mysql from 'promise-mysql'
import router from './routes/index.js';

//creation du serveur
const app = express();

//Chargement de la config

const { port, mode, dbConnection } = config.load();

//verification connection db


mysql.createConnection(dbConnection)
    .then(connection => {
        connection.end();

    })

.catch(e => {

    console.log("la config MYSQL est érroné");
    console.log('error message :' + e.sqlMessage);
    process.exit();
});






//ajout middleware

app.use(express.json()); //=>travail avec fichier json

//ajout du router

app.use(router);



//demarrer le server

app.listen(port, () => {

    console.log(`web server API on ${port} [mode : ${mode}]`);
});