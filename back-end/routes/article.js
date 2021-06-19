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

router.get('/allComment', async (req, res) => {
    try {
        // console.log(req.user);
        const comment = await pool.query(`
            SELECT * FROM comment a
            INNER JOIN "user" u ON a.uid = u.id
            WHERE a.aid = '${req.query.aid}'
        `);
        return res.status(200).json(comment.rows);
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
            WHERE id = '${req.id}'
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

router.get('/allArticle', async (req, res) => {
    try {
        // console.log(req.user);
        const articles = await pool.query(`
            SELECT * FROM article
        `);
        // console.log(articles.rows.length)
        for (let i of articles.rows) {
            // console.log('here')
            const topic = await pool.query(`
                SELECT t.value, t.label 
                FROM mn_article_topic mn 
                INNER JOIN topic t
                ON mn.tid = t.id
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

router.get('/searchedArticle', async (req, res) => {
    try {
        // console.log(req.user);
        const articles = await pool.query(`
            SELECT * FROM article
            WHERE title LIKE '%${req.query.text}%'
        `);
        // console.log(articles.rows.length)
        // for (let i of articles.rows) {
        //     // console.log('here')
        //     const topic = await pool.query(`
        //         SELECT t.value, t.label 
        //         FROM mn_article_topic mn 
        //         INNER JOIN topic t
        //         ON mn.tid = t.id
        //     `);
        //     i.topic = topic.rows;
        //     // console.log(topic.rows);
        // }
        return res.status(200).json(articles.rows);
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
});

router.post('/rate', async (req, res) => {
    try {
        const ratee = await pool.query(`
            SELECT * FROM rating
            WHERE uid = '${req.body.muid}'
        `);
        var check = 0;
        for (let i of ratee.rows) {
            if (req.body.maid == i.aid) {
                check++;
                break;
            }
        }
        if (check == 0) {
            const rate = await pool.query(`
            INSERT INTO rating (uid, aid, rating) 
            VALUES ('${req.body.muid}', '${req.body.maid}', ${req.body.mrating});
        `);
        }
        else {
            const change = await pool.query(`
            UPDATE rating
            SET rating = ${req.body.mrating}
            WHERE uid = '${req.body.muid}' AND aid = '${i.aid}'
        `);
        }
        return res.send('Đã tạo bài viết');
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }
});
router.post('/comment', async (req, res) => {
    try {

        const rate = await pool.query(`
            INSERT INTO comment (uid, aid, content) 
            VALUES ('${req.body.muid}', '${req.body.maid}', '${req.body.mcontent}');
        `);
        return res.send('Đã tạo bài viết');
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }
});

router.post('/saveArticle', async (req, res) => {
    try {
        if (req.body.role === 'reader') return res.status(400).send('Bạn không có quyền sử dụng tính năng này');
        // console.log(req.body.content..replace(`'`, `''`))
        const article = await pool.query(`
            INSERT INTO article (title, content, author, summary, image) 
            VALUES ('${req.body.title.replace(/'/g, `''`)}', '${req.body.content.replace(/'/g, `''`)}', '${req.body.uid}', '${req.body.summary.replace(/'/g, `''`)}', '${req.body.image}')
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

router.post('/addTopic', async (req, res) => {
    try {
        if (req.body.role === 'reader') return res.status(400).send('Bạn không có quyền sử dụng tính năng này');
        // console.log(req.body.content..replace(`'`, `''`))
        const article = await pool.query(`
            INSERT INTO topic (value, label) 
            VALUES ('${req.body.value.replace(/'/g, `''`)}', '${req.body.label.replace(/'/g, `''`)}')
            RETURNING id;
        `);
        return res.status(200).send('Đã tạo bài viết');
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }
});

router.post('/saveEditedArticle', async (req, res) => {
    try {
        console.log(req.body.id);
        const article = await pool.query(`
            UPDATE article
            SET title = '${req.body.title.replace(/'/g, `''`)}', 
                content = '${req.body.content.replace(/'/g, `''`)}', 
                summary = '${req.body.summary.replace(/'/g, `''`)}', 
                image = '${req.body.image}'
            WHERE id = '${req.body.id}'
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
