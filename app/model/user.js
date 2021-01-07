'use strict';

module.exports = app => {
    const { INTEGER, DATE, STRING } = app.Sequelize;
    const User = app.model.define('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { 
        type: STRING(20),
        set(val) {
          // 修改器
          this.setDataValue('name', val + '01')
        }
      },
      password: STRING,
      created_at: {
        type: DATE,
        get(val) {
          // 获取器
          return (new Date(this.getDataValue('created_at'))).getTime()
        }
      },
      updated_at: {
        type: DATE,
        get(val) {
          // 获取器
          return (new Date(this.getDataValue('updated_at'))).getTime()
        }
      },
    })

    return User
};