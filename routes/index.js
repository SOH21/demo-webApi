import express from "express";
import sqlRouter from "./sqlRouter.js";
import demoRouter from "./demoRouter.js";

const router = express.Router();

demoRouter(router);
sqlRouter(router);


export default router;