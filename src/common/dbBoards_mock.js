const Board = require('../resources/boards/board.model');

const DB = [];

DB.push(new Board());

const getAll = async () => DB;

const getById = async id => DB.filter(item => item.id === id)[0];
//TODO: errorHandling https://youtu.be/zLubYW9J-ss?t=5372
const create = async board => {
  DB.push(board);
  return getById(board.id);
};

const updateById = async (id, body) => {
  const board = DB.filter(board => board.id === id)[0];
  board.title = body.title;
  board.columns = body.columns;

  return board;
};
const deleteById = async id => {
  const board = DB.findIndex(n => n.id === id);
  if (board !== -1) {
    return true;
  }
};

module.exports = { DB, getAll, getById, create, updateById,deleteById };
