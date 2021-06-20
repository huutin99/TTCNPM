var express = require('express');
const { BadRequest } = require('http-errors');
var router = express.Router();
const { pool } = require('../queries');

/* GET users listing. */
router.post('/', async (req, res) => {
    try {
        const user = await pool.query(`SELECT * FROM "user" WHERE username = '${req.body.username}' AND password = '${req.body.password}'`);
        if (user.rowCount === 0) throw BadRequest('Thông tin đăng nhập sai');
        let lifetime = new Date();
        lifetime.setHours(lifetime.getHours() + 7);
        await pool.query(`DELETE FROM user_session WHERE uid = '${user.rows[0].id}' AND lifetime <= to_timestamp(${Math.round(lifetime.getTime() / 1000)})`);
        lifetime.setHours(lifetime.getHours() + 6);
        const session = await pool.query(`INSERT INTO "user_session" (uid, lifetime) VALUES ('${user.rows[0].id}', to_timestamp(${Math.round(lifetime.getTime() / 1000)})) RETURNING *`);
        // const session = await pool.query(`SELECT "id" FROM "user_session" WHERE uid = '${user.rows[0].id}' AND lifetime = to_timestamp(${Math.round(lifetime.getTime() / 1000)})`);
        return res.json({ mes: 'Đăng nhập thành công', token: session.rows[0].id, user: { id : user.rows[0].id , name: user.rows[0].name, email: user.rows[0].email, role: user.rows[0].role } });
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;