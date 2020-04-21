const express = require('express');
const router = express.Router();

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read);

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
//:userId comes from routes/user
router.put(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.delete(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get('/categories', list);

router.param('categoryId', categoryById); // everytime we have categoryId in the route paramter, we want to run middleware categoryById
router.param('userId', userById); // comes from controllers/user

module.exports = router;
