/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609207970064_549';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //关闭csrf
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: []
  }
  // 开启cors跨域
  config.cors = {
      origin: '*',
      allowMethods: 'GET, PUT, POST, DELETE'
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'ljw12345',
    port: 3306,
    database: 'eggapi',
    timezone: '+08:00',
    define: {
      // 取消数据表名数
      freezeTableName: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
