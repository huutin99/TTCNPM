const express=require('express');
const router=express.Router();
const articleModel=require('../models/article')

router.post("/",async(req,res)=>{
    try {
        //id lay tu id cua nguoi dung hien tai
        const id="d610a08d-e1c6-4627-b1ec-e170715074d1"
        const { title,content } = req.body
        const newArticle=await articleModel.AddArticle(title,content,id)
        res.json(newArticle.rows[0])
    } catch (err) {
        console.log(err.message)
    }
})


module.exports=router