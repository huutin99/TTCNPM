var express = require('express');
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

router.get('/view', async (req, res) => {
    try {
        // console.log(req.query);
        const data = await pool.query(`
            SELECT a.title, a.content, a."createDate", a."numOfSeens", a.summary, a.image, t.label, u.name
            FROM article a
            INNER JOIN mn_article_topic mn ON a.id = mn.aid
            INNER JOIN topic t ON mn.tid = t.id
            INNER JOIN "user" u ON a.author = u.id
            WHERE a.id = '${req.query.id}'
        `);
        const article = { ...data.rows[0], topic: data.rows.map(i => (i.label)) }
        // console.log(data.rows);
        return res.status(200).json(article);
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
});

router.post('/incView', async (req, res) => {
    try {
        await pool.query(`
            UPDATE article
            SET "numOfSeens" = "numOfSeens" + 1
            WHERE id = '${req.body.id}'
        `);
        return res.status(200).send('Increased');
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
});

router.post('/delete', async (req, res) => {
    try {
        await pool.query(`
            DELETE FROM article
            WHERE id = '${req.id}' AND author = '${req.user.id}'
        `);
        return res.status(200).send('Đã xóa bài viết');
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
});

router.get('/authoredArticle', async (req, res) => {
    try {
        // console.log(req.user);
        const articles = await pool.query(`
            SELECT * FROM article
            WHERE author = '${req.user.uid}'
        `);
        // console.log(articles.rows.length)
        for (let i of articles.rows) {
            // console.log('here')
            const topic = await pool.query(`
                SELECT t.value, t.label 
                FROM mn_article_topic mn 
                INNER JOIN topic t
                ON mn.tid = t.id
                WHERE mn.aid = '${i.id}'
            `);
            i.topic = topic.rows;
            // console.log(topic.rows);
        }
        return res.status(200).json(articles.rows);
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
});

router.post('/saveArticle', async (req, res) => {
    try {
        if (req.user.role === 'reader') return res.status(400).send('Bạn không có quyền sử dụng tính năng này');
        // console.log(req.body.content..replace(`'`, `''`))
        const article = await pool.query(`
            INSERT INTO article (title, content, author, summary, image) 
            VALUES ('${req.body.title.replace(/'/g, `''`)}', '${req.body.content.replace(/'/g, `''`)}', '${req.user.uid}', '${req.body.summary.replace(/'/g, `''`)}', '${req.body.image}')
            RETURNING id;
        `);
        // console.log(article.rows[0]);
        if (req.body.category !== [])
            for (const i of req.body.category) {
                const topic = await pool.query(`SELECT id FROM topic WHERE value = '${i}'`);
                await pool.query(`
                    INSERT INTO mn_article_topic VALUES ('${article.rows[0].id}', '${topic.rows[0].id}')
                `);
            }
        return res.send('Đã tạo bài viết');
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }
});

router.post('/saveEditedArticle', async (req, res) => {
    try {
        if (req.user.role === 'reader') return res.status(400).send('Bạn không có quyền sử dụng tính năng này');
        // console.log(req.body.id, req.user.id)
        const article = await pool.query(`
            UPDATE article
            SET title = '${req.body.title.replace(/'/g, `''`)}', 
                content = '${req.body.content.replace(/'/g, `''`)}', 
                summary = '${req.body.summary.replace(/'/g, `''`)}', 
                image = '${req.body.image}'
            WHERE id = '${req.body.id}' AND author = '${req.user.uid}'
            RETURNING id
        `)
        // console.log(article.rows);
        if (req.body.oldCate[0] !== null)
            for (const i of req.body.oldCate) {
                const topic = await pool.query(`SELECT id FROM topic WHERE value = '${i}'`);
                await pool.query(`
                    DELETE FROM mn_article_topic
                    WHERE aid = '${req.body.id}' AND tid = '${topic.rows[0].id}'
                `);
            }
        if (req.body.category !== [])
            for (const i of req.body.category) {
                const topic = await pool.query(`SELECT id FROM topic WHERE value = '${i}'`);
                await pool.query(`
                    INSERT INTO mn_article_topic VALUES ('${req.body.id}', '${topic.rows[0].id}')
                `);
            }
        return res.send('Đã sửa bài viết');
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }
});

router.get('/edit', async (req, res) => {
    try {
        // console.log(req.query);
        const data = await pool.query(`
            SELECT a.title, a.content, a.summary, a.image, t.value
            FROM article a
            LEFT JOIN mn_article_topic mn ON a.id = mn.aid
            LEFT JOIN topic t ON mn.tid = t.id
            LEFT JOIN "user" u ON a.author = u.id
            WHERE a.id = '${req.query.id}'
        `);
        const article = { ...data.rows[0], topic: data.rows.map(i => (i.value)) }
        // console.log(data.rows);
        return res.status(200).json(article);
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
});

module.exports = router;
