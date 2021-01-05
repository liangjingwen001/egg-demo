'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello';
  }

  async register() {
    const { ctx } = this;
    // ctx.query获取get请求参数
    console.log(ctx.query)
    ctx.body = 'register';
  }
}

module.exports = HomeController;
