import express from "express";
import serverConfig from "./config/serverConfig.json";
import router from './routes/index.js';

//creation du serveur
const app = express();

//chargement du fichier config      

const config = process.argv.includes('--production') ? serverConfig.production : serverConfig.developpement

const { port, mode, dbConnection } = config;

//ajout middleware

app.use(express.json()); //=>travail avec fichier json

//ajout du router

app.use(router);



//demarrer le server

app.listen(port, () => {

    console.log(`web server API on ${port} [mode : ${mode}]`);
});