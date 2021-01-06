'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // 列表页(get),api地址为 /api/user 或者 /api/user/index
    async index() {
        const { ctx } = this;
        ctx.body = 'index';
    }
    // 新增表单(get),api地址为 /api/user/new
    async new() {
        const { ctx } = this;
        ctx.body = 'new';
    }
    // 新增逻辑(post),api地址为 /api/user
    async create() {
        let res = await this.app.model.User.create({
            name: 'wangchao',
            password: 'abc123',
        })
        this.ctx.body = res;
    }
    // 详情页(get),api地址为 /api/user/:id
    async show() {
        const { ctx } = this;
        ctx.body = 'show' + ctx.params.id;
    }
    // 编辑页(get),api地址为 /api/user/:id/edit
    async edit() {
        const { ctx } = this;
        ctx.body = 'edit';
    }
    // 更新页(put)
    async update() {
        const { ctx } = this;
        ctx.body = 'update';
    }
    // 删除(delete)
    async delete() {
        const { ctx } = this;
        ctx.body = 'delete';
    }
}

module.exports = UserController;
