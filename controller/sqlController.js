import sqlSercice from "../db/sqlService.js";



const sqlController = {


    getAll: async(req, res) => {

        const todos = await sqlSercice.getAll();
        res.status(200).json(todos);

    },


    getOne: async(req, res) => {

        const id = parseInt(req.params.id);
        const task = await sqlSercice.getOne(id);


        if (task && task.length === 1) {

            res.status(200).json(task);

        } else {

            res.sendStatus(404);

        }




    },


    insert: (req, res) => {



        res.sendStatus(501);
    },


    update: (req, res) => {



        res.sendStatus(501);
    },

    delete: (req, res) => {



        res.sendStatus(501);
    },





}

export default sqlController;