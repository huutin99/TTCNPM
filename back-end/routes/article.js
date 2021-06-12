var express = require('express');
const { BadRequest } = require('http-errors');
var router = express.Router();
const { pool } = require('../queries');

router.get('/topic', async (req, res) => {
    try {
        // console.log(req.user);
        const topic = await pool.query(`SELECT * FROM "topic"`);
        return res.status(200).json(topic.rows);
    } catch (error) {
        return res.send(error);
    }

});

router.post('/saveArticle', async (req, res) => {
    try {
        if (req.user.role === 'reader') return res.status(400).send('Bạn không có quyền sử dụng tính năng này');
        const article = await pool.query(`
            INSERT INTO article (title, content, author) 
            VALUES ('${req.body.title}', '${req.body.content}', '${req.user.uid}')
            RETURNING id;
        `);
        console.log(article.rows[0]);
        if (req.body.category !== [])
            for (const i of req.body.category) {
                const topic = await pool.query(`SELECT id FROM topic WHERE value = '${i}'`);
                await pool.query(`
                    INSERT INTO mn_article_topic VALUES ('${article.rows[0].id}', '${topic.rows[0].id}')
                `);
            }
        return res.send('Đã tạo bài viết');
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;