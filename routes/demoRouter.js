import demoController from '../controller/demoController.js'

export default (router) => {

    router.route('/demo')
        .get(demoController.getall)
        .post(demoController.add);

    router.route('/demo/:id')
        .get(demoController.getOne)
        .put(demoController.update)
        .delete(demoController.deleteOne);


}