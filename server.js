import express from "express";
import config from "./config/config.js";

import router from './routes/index.js';

//creation du serveur
const app = express();

//Chargement de la config

const { port, mode } = config.load();



//ajout middleware

app.use(express.json()); //=>travail avec fichier json

//ajout du router

app.use(router);



//demarrer le server

app.listen(port, () => {

    console.log(`web server API on ${port} [mode : ${mode}]`);
});