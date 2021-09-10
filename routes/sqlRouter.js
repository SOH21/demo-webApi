import sqlController from "../controller/sqlController.js";

export default (router) => {

    router.route('/todo')
        .get(sqlController.getAll)
        .post(sqlController.insert);

    router.route('/todo/:id([0-9]+)')
        .get(sqlController.getOne)
        .put(sqlController.update)
        .delete(sqlController.delete);



}