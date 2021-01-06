'use strict';

module.exports = app => {
    const { INTEGER, DATE, STRING } = app.Sequelize;
    const User = app.model.define('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING},
      password: STRING,
      created_at: DATE,
      updated_at: DATE,
    })

    return User
};