const express = require('express');
const router = express.Router();
const {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    loginUser,
} = require('../controllers/userController');

router.post('/register', createUser);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);
router.get('/all', getAllUsers);
router.post('/login', loginUser);

module.exports = router;
