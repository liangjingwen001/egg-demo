'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello';
  }

  async login() {
    const { ctx } = this;
    // ctx.query获取get请求参数
    console.log(ctx.query)
    ctx.body = 'login';
  }

  async getRouter() {
    const { ctx } = this;
    // ctx.params获取动态路由参数
    console.log(ctx.params)
    ctx.body = 'getRouter';
  }

  async getPost() {
    const { ctx } = this;
    // ctx.request.body获取post请求参数
    console.log(ctx.request.body)
    ctx.body = {
      code: '200',
      data: 'getPost'
    };
  }
}

module.exports = HomeController;
