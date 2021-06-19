var express = require('express');
var router = express.Router();
const { pool } = require('../queries');

/* GET users listing. */
router.get('/user', async (req, res) => {
    try {
        const users = await pool.query(`SELECT * FROM "user"`);
        return res.status(200).json(users.rows);
    } catch (error) {
        return res.send(error);
    }
});

module.exports = router;
