const deviceModel = require('../collections/devices');
const express = require('express');
const router = express.Router()



router.post('/api/saveDeviceInfo',async(req,res)=>{
try{
let filter ={deviceUID:req.body.deviceUID};
let update = req.body
const result = await deviceModel.findOneAndUpdate(filter,update,{ new: true,upsert: true,rawResult:true});
res.json({'success':true,'data':result});
}catch (err){
    console.log(err)
res.json({'success':false,'data':err})
    }
})

module.exports = router