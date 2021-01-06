'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/login', controller.home.login);
    router.get('/getRouter/:id', controller.home.getRouter);
    router.post('/getPost', controller.home.getPost);
    // 路由分组
    require('./router/user')(app)
};
