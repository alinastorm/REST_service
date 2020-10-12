const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const users = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});
router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  // map user fields to exclude secret fields like "password"
  res.json(Board.toResponse(board));
});
router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns,
    })
  );
  // map user fields to exclude secret fields like "password"
  res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.updateById(req.params.id, req.body);
  // map user fields to exclude secret fields like "password"
  res.json(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteById(req.params.id);
  // map user fields to exclude secret fields like "password"
  res.json(Board.toResponse(board));
});
module.exports = router;
