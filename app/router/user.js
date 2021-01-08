module.exports = app => {
    const { router, controller } = app;
    // 资源路由
    router.resources('user', '/api/user', controller.user);
    router.post('/api/user/update/:id', controller.user.update);
    router.post('/api/user/delete/:id', controller.user.delete);
}