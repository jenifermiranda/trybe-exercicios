// src/models/user.model.js

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    timestamps: false,
    tablename: 'Users',
    // underscored: true, 
  });
  (async () => {
    await sequelize.sync({ force: true });
  });
  return User;
};