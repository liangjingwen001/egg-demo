module.exports = (option, app) => {
    // 拦截器
    return async function errorHandler(ctx, next) {
        try {
            // 执行api接口
            await next();
        } catch (error) {
            ctx.app.emit('error', error, ctx);
            ctx.status = error.status;
            if (ctx.status == 422) {
                return ctx.body = {
                    msg: "fail",
                    data:  error.errors
                }
            }
            ctx.body = {
                msg: "fail",
                data:  error.message
            }
        }
    }
}