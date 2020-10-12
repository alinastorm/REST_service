const DB = require('../../common/dbBoards_mock');

const getAll = async () => DB.getAll();

const getById = async id => DB.getById(id);

const create = async board => DB.create(board);

const updateById = async (id, body) => DB.updateById(id, body);
const deleteById = async id => DB.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
