'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // 列表页(get),api地址为 /api/user 或者 /api/user/index
    async index() {
        // 通过主键查询单条数据
        // let res = await this.app.model.User.findByPk(2)

        // 多个条件查询单个数据
        // let res = await this.app.model.User.findOne({
        //     where: {
        //         name: "zhangsan",
        //         password: "abc1231"
        //     }
        // })

        // 多个条件查询多个数据
        let Op = this.app.Sequelize.Op;
        let offset = (2-1) * 4
        let res = await this.app.model.User.findAll({
            where: {
                // name: {
                //     [Op.like]: "%li%"
                // },
                // id: {
                //     [Op.gt]: 4
                // }
            },
            // 只查询某些字段
            // attributes: ['id', 'name'],
            // 排除某些字段
            attributes: {
                exclude: ['password']
            },
            // 根据id排序s
            order: [
                ['id', 'DESC']
            ],
            // 偏移量(分页)
            offset,
            limit: 4
        })

        // 多个条件查询多个数据并计算总数
        // let res = await this.app.model.User.findAndCountAll({
        //     where: {
        //         // name: "zhangsan",
        //         password: "abc123"
        //     } 
        // })
        this.ctx.body = res;
    }
    // 新增表单(get),api地址为 /api/user/new
    async new() {
        const { ctx } = this;
        ctx.body = 'new';
    }
    // 新增逻辑(post),api地址为 /api/user
    async create() {
        // 插入单条数据
        // let res = await this.app.model.User.create({
        //     name: 'mahan',
        //     password: 'abc123',
        // })

        // 插入多条数据
        // let res = await this.app.model.User.bulkCreate([
        //     {
        //         name: 'zhangsan',
        //         password: 'abc123',
        //     },
        //     {
        //         name: 'lisi',
        //         password: 'abc123',
        //     },
        //     {
        //         name: 'wangwu',
        //         password: 'abc123',
        //     },
        //     {
        //         name: 'zhaoliu',
        //         password: 'abc123',
        //     }
        // ])

        // 验证数据
        let params = this.ctx.request.body;
        this.ctx.validate({
            name: {
                type: 'string',
                require: true,
                desc: '用户名'
            },
            password: {
                type: 'string',
                require: true,
                desc: '密码'
            }
        })
        let res = await this.app.model.User.create(params)
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
        let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0;
        let data = await this.app.model.User.findByPk(id);
        // 修改单个字段
        // data.name = '被修改了';
        // let res = await data.save();
        // 修改多个字段
        let res = await data.update({name: 'java', password: 'lalala'})
        this.ctx.body = res;
    }

    // 删除(delete)
    async delete() {
        this.ctx.throw(500, '故意出错')
        let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0;
        // 删除单条记录
        // let data = await this.app.model.User.findByPk(id);
        // let res = data.destroy();
        // 删除多条
        // let Op = this.app.model.Sequelize.Op;
        // let res = await this.app.model.User.destroy({
        //     where: {
        //         id: {
        //             [Op.lte]: 3
        //         }
        //     }
        // });
        // this.ctx.body = res;
    }
}

module.exports = UserController;
