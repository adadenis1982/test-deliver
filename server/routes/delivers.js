const router = require('express').Router();
const { getData, createDeliver, updateDeliver, deleteDeliver } = require('../controllers/delivers');

router.get('/', getData);
router.post('/', createDeliver);
router.put('/:id', updateDeliver);
router.delete('/:id', deleteDeliver);

module.exports = router;
