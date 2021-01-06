'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 在执行数据库升级时调用的函数，创建 users 表
      const { INTEGER, DATE, STRING } = Sequelize;
      await queryInterface.createTable('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: STRING},
        password: STRING,
        created_at: DATE,
        updated_at: DATE,
      });
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};
