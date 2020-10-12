const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User());

const getAll = async () => DB;

const getById = async id => DB.filter(item => item.id === id)[0];
//TODO: errorHandling https://youtu.be/zLubYW9J-ss?t=5372
const create = async user => {
  DB.push(user);
  return getById(user.id);
};

const updateById = async (id, body) => {
  const user = DB.filter(user => user.id === id)[0];
  user.name = body.name;
  user.login = body.login;
  user.password = body.password;

  return user;
};
const deleteById = async id => {
  const user = DB.findIndex(n => n.id === id);
  if (user !== -1) {
    return true;
  }
};

module.exports = { DB, getAll, getById, create, updateById,deleteById };
