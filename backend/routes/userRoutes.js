const express = require('express');
const router = express.Router();
const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    loginUser,
} = require('../controllers/userController');

router.post('/create', createUser);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);
router.post('/login', loginUser);

module.exports = router;
