module.exports = app => {
    const { router, controller } = app;
    // 资源路由
    router.resources('user', '/api/user', controller.user);
}