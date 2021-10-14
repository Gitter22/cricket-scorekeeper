const express=require('express')
const router=express.Router({mergeParams:true})
const MatchBall=require('../models/matchBall')

router.get('/', async (req,res)=>{
    const matchBall=await MatchBall.find({})
    res.send(matchBall)
})

router.post('/', async (req,res)=>{
    const data=req.body
   const matchball=await new MatchBall(data)
   await matchball.save()
   res.send('Data added')
})

module.exports=router