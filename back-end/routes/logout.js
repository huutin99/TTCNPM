var express = require('express');
var router = express.Router();
const { pool } = require('../queries');

router.post('/', async (req, res) => {
    try {
        // console.log(req.user);
        await pool.query(`DELETE FROM user_session WHERE id = '${req.user.id}'`)
        return res.send('Đăng xuất thành công');
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;