var express = require('express');
const { BadRequest } = require('http-errors');
var router = express.Router();
const { pool } = require('../queries');

/* GET users listing. */
router.post('/', async (req, res) => {
    // console.log(req.body);
    // console.log(pool);
    try {
        // console.log(req.body.username);
        const oldUser = await pool.query(`SELECT * FROM "user" WHERE username = '${req.body.username}';`);
        // console.log(oldUser.rowCount);
        if (oldUser.rowCount !== 0) {
            throw BadRequest('Người dùng đã tồn tại');
        }
        await pool.query(`
            INSERT INTO "user" (username, password, email, name) 
            VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.name}')`
        );
        await pool.end();
        return res.status(200).send('Đã thêm người dùng')
    } catch (error) {
        // console.log('here')
        return res.send(error);
    }

});

module.exports = router;