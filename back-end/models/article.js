const pool=require('../queries');
//add a article
const AddArticle= async (title,content,id) => {
    
    const dateRaw=await pool.query("SELECT NOW();")
    const date=dateRaw.rows[0].now
    const newArticle = await pool.query("INSERT INTO article (title, content,author,createDate,numOfLikes, numOfSeens) VALUES($1,$2,$3,$4,0,0) RETURNING *", [title,content,id,date]);
    return newArticle;
}

module.exports =articleModel={
    AddArticle,
}